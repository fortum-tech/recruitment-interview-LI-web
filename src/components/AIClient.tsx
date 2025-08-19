"use client";

import { useRef, useState } from "react";

type StreamingResponse = {
  error?: {
    code: number;
    message: string;
  };
};

export function AIClient() {
  const [response, setResponse] = useState<StreamingResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  const [prompt, setPrompt] = useState("Give me 3 electricity contracts");

  const [chunks, setChunks] = useState<string[]>([]);

  const sendAIRequest = () => {};

  return (
    <div className="space-y-4">
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
        <h4 className="font-semibold text-orange-800 mb-2">
          🔧 TODO: Streaming AI Implementation (Part 2)
        </h4>
        <div className="text-sm text-orange-700">
          <ul className="text-sm text-blue-700 space-y-1">
            <li>
              • Use the same Contract displaying UI component as in the previous
              stage of this challenge, but now try to stream responses from an
              AI model like Google Gemini and use the help of the model to get
              information about Fortum's electricity contracts based on current
              information about electricity contracts on this page:
              https://www.fortum.com/fi/sahkoa/en/electricity-for-home .
            </li>
            <li>
              • The AI model should preferably also return you the data in
              chunks as they arrive. You probably need to research a bit how to
              get the AI model to respond in similar format and in chunks as the
              mock data in previous stage. Also architecturally you may have
              several options of which part of your application talks with the
              AI model and streams the data in appropriate chunks. You may also
              implement a separate local node server or similar solution for
              that part if it helps you. So this can in many ways be a prototype
              level implementation.
            </li>
            <li>
              • You may use any AI model you want, but e.g. Google Gemini should
              be a good choice where you should be able to register for an API
              key and access the model.
            </li>
            <li>
              • NOTE: This task can easily occupy a lot of time, so choose where
              you focus. Getting the core prototype level implementation working
              or even just describing how you would think of doing this might be
              good enough.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Request:</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-md font-mono text-sm"
          placeholder="Enter request..."
        />
      </div>

      <button
        onClick={sendAIRequest}
        disabled={isLoading}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send Request"}
      </button>

      <div className="bg-gray-100 rounded-md p-4 min-h-[120px] mt-4 text-sm text-gray-700">
        {isLoading && <span>Streaming AI response...</span>}
        {!isLoading && chunks.length === 0 && !response && (
          <div className="text-center text-gray-500 py-8">
            Click "Send Request" to begin streaming AI results
          </div>
        )}
        {chunks.length > 0 ? (
          <pre className="whitespace-pre-wrap">{chunks.join("\n")}</pre>
        ) : response ? (
          <pre>{JSON.stringify(response, null, 2)}</pre>
        ) : null}
      </div>
    </div>
  );
}
