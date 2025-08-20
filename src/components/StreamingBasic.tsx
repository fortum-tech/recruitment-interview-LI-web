"use client";

import { ElectricityContractChunk } from "@/app/api/stream-data/route";
import { useState } from "react";

//TODO: This component should display the streamed electricity contract data
//based on what it gets from /api/stream-data
export function StreamingBasic() {
  const [chunks, setChunks] = useState<ElectricityContractChunk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startStreaming = async () => {}; //TODO

  return (
    <div className="streaming-container text-black">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Streaming with mock data</h4>
        <button
          onClick={startStreaming}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Streaming..." : "Start Stream"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      {isLoading && (
        <div className="flex items-center gap-2 mb-4">
          <div className="loading-spinner"></div>
          <span>Fetching data chunks...</span>
        </div>
      )}

      <div className="space-y-2">
        {chunks.map((chunk, index) => (
          <pre
            key={index}
            className="bg-gray-100 p-2 rounded text-xs overflow-auto"
          >
            {
              //TODO: Some nicer rendering
              JSON.stringify(chunk, null, 2)
            }
          </pre>
        ))}
      </div>

      {chunks.length === 0 && !isLoading && (
        <div className="text-center text-gray-500 py-8">
          Click "Start Stream" to begin fetching data chunks
        </div>
      )}
    </div>
  );
}
