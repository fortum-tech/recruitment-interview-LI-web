'use client'

import { useState, useEffect } from 'react'
import { DataChunk } from '@/types/streaming'

export function StreamingDemo() {
  const [chunks, setChunks] = useState<DataChunk[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const startStreaming = async () => {
    setIsLoading(true)
    setError(null)
    setChunks([])

    try {
      // TODO: Implement streaming fetch
      // This is where candidates need to implement the streaming logic
      const response = await fetch('/api/stream-data')
      
      if (!response.ok) {
        throw new Error('Failed to fetch streaming data')
      }

      // TODO: Implement proper streaming response handling
      // Candidates should implement ReadableStream processing here
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('No readable stream available')
      }

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter(line => line.trim())
        
        for (const line of lines) {
          try {
            const data = JSON.parse(line) as DataChunk
            setChunks(prev => [...prev, data])
          } catch (e) {
            console.warn('Failed to parse chunk:', line)
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="streaming-container">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Streaming Data Demo</h4>
        <button
          onClick={startStreaming}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Streaming...' : 'Start Stream'}
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
          <div key={index} className="chunk-item">
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-medium">{chunk.title}</h5>
                <p className="text-sm text-gray-600">{chunk.content}</p>
              </div>
              <span className="text-xs text-gray-400">#{chunk.id}</span>
            </div>
          </div>
        ))}
      </div>

      {chunks.length === 0 && !isLoading && (
        <div className="text-center text-gray-500 py-8">
          Click "Start Stream" to begin fetching data chunks
        </div>
      )}
    </div>
  )
}
