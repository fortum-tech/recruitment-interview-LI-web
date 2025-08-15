"use client";

import { useRef, useState } from "react";
import { MCPResponse } from "@/types/streaming";

import { CityCards } from "./CityCards";

export function MCPClient() {
  const [response, setResponse] = useState<MCPResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  const [prompt, setPrompt] = useState("Give me 5 cities in Europe.");

  const [chunks, setChunks] = useState<string[]>([]);

  const sendMCPRequest = () => {
    setIsLoading(true);
    setResponse(null);
    setChunks([]);

    // Close previous connection if any
    if (wsRef.current) {
      wsRef.current.close();
    }

    const ws = new window.WebSocket("ws://localhost:4000");
    wsRef.current = ws;

    ws.onopen = () => {
      try {
        ws.send(
          JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "generateCities",
            params: { model: "gemini-2.5-pro", prompt: prompt },
          })
        );
      } catch (error) {
        setResponse({
          error: {
            code: -32700,
            message: error instanceof Error ? error.message : "Unknown error",
          },
        });
        setIsLoading(false);
        ws.close();
      }
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.result?.chunk) {
          setChunks((prev) => [...prev, msg.result.chunk]);
        }
        if (msg.result?.done) {
          setIsLoading(false);
          ws.close();
        }
        if (msg.error) {
          setResponse({ error: msg.error });
          setIsLoading(false);
          ws.close();
        }
      } catch (error) {
        setResponse({
          error: {
            code: -32700,
            message: "Failed to parse MCP server response",
          },
        });
        setIsLoading(false);
        ws.close();
      }
    };
  };

  return (
    <div className="space-y-4">
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
        <h4 className="font-semibold text-orange-800 mb-2">
          🔧 TODO: MCP Implementation
        </h4>
        <p className="text-sm text-orange-700">
          This component needs to be implemented to communicate with MCP
          servers. The MCP (Model Context Protocol) allows structured
          communication with AI models and tools. You should implement it to
          give you information about cities in a structure json format. Then you
          could ask e.g. about european cities, or worlds largest cities etc.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">MCP Request:</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-md font-mono text-sm"
          placeholder="Enter MCP request JSON..."
        />
      </div>

      <button
        onClick={sendMCPRequest}
        disabled={isLoading}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send MCP Request"}
      </button>

      {/*(chunks.length > 0 || response) && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Response (should look visually nicer than now):
          </label>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
            {chunks.length > 0
              ? chunks.join("\n")
              : response
              ? JSON.stringify(response, null, 2)
              : ""}
          </pre>
        </div>
      )*/}
      {(chunks.length > 0 || response) && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Response (should look visually nicer than now):
          </label>
          {chunks.length > 0 ? (
            <CityCards chunks={chunks} />
          ) : response ? (
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          ) : null}
        </div>
      )}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">
          💡 Implementation Hints
        </h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Research the MCP protocol specification</li>
          <li>• Implement proper JSON-RPC 2.0 communication</li>
          <li>• Add support for streaming MCP responses</li>
          <li>• Handle MCP server connection management</li>
          <li>• Implement proper error handling for MCP errors</li>
        </ul>
      </div>
    </div>
  );
}
