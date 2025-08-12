export default function ApiDocsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">API Documentation</h2>
        <p className="text-gray-700 mb-6">
          This page documents the available API endpoints for the streaming data application.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Streaming Data Endpoint</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <code className="text-sm">GET /api/stream-data</code>
        </div>
        
        <h4 className="font-semibold mb-2">Description</h4>
        <p className="text-gray-700 mb-4">
          Returns a streaming response with data chunks. Each chunk is sent as a separate JSON object
          followed by a newline character.
        </p>

        <h4 className="font-semibold mb-2">Response Format</h4>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto mb-4">
{`Content-Type: application/json
Cache-Control: no-cache
Connection: keep-alive

{"id":"chunk-1","title":"Data Chunk 1","content":"...","timestamp":1234567890}
{"id":"chunk-2","title":"Data Chunk 2","content":"...","timestamp":1234567891}
...`}
        </pre>

        <h4 className="font-semibold mb-2">Data Chunk Schema</h4>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
{`{
  "id": string,
  "title": string,
  "content": string,
  "timestamp": number,
  "metadata": {
    "source": string,
    "category": string,
    "priority": number
  }
}`}
        </pre>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">MCP Protocol Endpoint</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <code className="text-sm">POST /api/stream-data</code>
        </div>
        
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-red-800 mb-2">🚧 Not Implemented</h4>
          <p className="text-sm text-red-700">
            This endpoint is part of the interview challenge. Candidates need to implement
            MCP (Model Context Protocol) communication.
          </p>
        </div>

        <h4 className="font-semibold mb-2">Expected Request Format</h4>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto mb-4">
{`{
  "method": "list_resources",
  "params": {
    "cursor": "optional-cursor"
  }
}`}
        </pre>

        <h4 className="font-semibold mb-2">Expected Response Format</h4>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
{`{
  "result": {
    "resources": [...],
    "nextCursor": "optional-next-cursor"
  }
}

// Or error response:
{
  "error": {
    "code": -32601,
    "message": "Method not found"
  }
}`}
        </pre>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Implementation Guidelines</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Streaming Best Practices:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Use ReadableStream for efficient memory usage</li>
              <li>• Implement proper backpressure handling</li>
              <li>• Add stream cancellation support</li>
              <li>• Handle network interruptions gracefully</li>
              <li>• Implement exponential backoff for retries</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">MCP Protocol Requirements:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Follow JSON-RPC 2.0 specification</li>
              <li>• Implement proper error codes</li>
              <li>• Support streaming responses</li>
              <li>• Handle connection lifecycle</li>
              <li>• Add request/response validation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
