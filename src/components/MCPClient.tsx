"use client";

import { useState } from "react";
import { MCPRequest, MCPResponse } from "@/types/streaming";

export function MCPClient() {
  const [request, setRequest] = useState<string>(
    '{"method": "list_resources", "params": {}}'
  );
  const [response, setResponse] = useState<MCPResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMCPRequest = async () => {
    setIsLoading(true);
    setResponse(null);

    try {
      const parsedRequest: MCPRequest = JSON.parse(request);

      const res = await fetch("/api/stream-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedRequest),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({
        error: {
          code: -32700,
          message: error instanceof Error ? error.message : "Unknown error",
        },
      });
    } finally {
      setIsLoading(false);
    }
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
          communication with AI models and tools.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          MCP Request JSON:
        </label>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
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

      {response && (
        <div>
          <label className="block text-sm font-medium mb-2">Response:</label>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
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
