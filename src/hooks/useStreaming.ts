"use client";

import { useState, useCallback, useRef } from "react";
import { DataChunk } from "@/types/streaming";

interface UseStreamingOptions {
  onChunk?: (chunk: DataChunk) => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
}

export function useStreaming(options: UseStreamingOptions = {}) {
  const [chunks, setChunks] = useState<DataChunk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const startStream = useCallback(
    async (url: string) => {
      // TODO: This hook needs to be implemented by candidates
      // It should provide a reusable streaming interface

      setIsLoading(true);
      setError(null);
      setChunks([]);

      // Create abort controller for cancellation
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(url, {
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // TODO: Implement proper streaming logic here
        // This is a simplified version that needs improvement
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error("No readable stream available");
        }

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n").filter((line) => line.trim());

          for (const line of lines) {
            try {
              const data = JSON.parse(line) as DataChunk;
              setChunks((prev) => {
                const newChunks = [...prev, data];
                options.onChunk?.(data);
                return newChunks;
              });
            } catch (e) {
              console.warn("Failed to parse chunk:", line);
            }
          }
        }

        options.onComplete?.();
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          const error = err instanceof Error ? err : new Error("Unknown error");
          setError(error);
          options.onError?.(error);
        }
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [options]
  );

  const cancelStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  const reset = useCallback(() => {
    setChunks([]);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    chunks,
    isLoading,
    error,
    startStream,
    cancelStream,
    reset,
  };
}
