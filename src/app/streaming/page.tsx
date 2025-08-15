import { StreamingDemo } from "@/components/StreamingDemo";
import { MCPClient } from "@/components/MCPClient";

export default function StreamingPage() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Streaming Data Implementation
        </h2>
        <p className="text-gray-700 mb-6">
          This page demonstrates the streaming data functionality. The
          implementation is partially complete and needs to be finished as part
          of the interview challenge.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">
            🚧 Implementation Status
          </h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>✅ Basic streaming setup</li>
            <li>⚠️ Stream processing needs optimization</li>
            <li>❌ MCP protocol integration missing</li>
            <li>❌ Error handling incomplete</li>
            <li>❌ Performance optimizations needed</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Basic Streaming Demo</h3>
        <StreamingDemo />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">MCP Protocol Client</h3>
        <p className="text-gray-600 mb-4">
          This component should implement MCP (Model Context Protocol)
          communication:
        </p>
        <MCPClient />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Challenge Requirements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Core Features to Implement:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Efficient streaming data processing</li>
              <li>• Real-time chunk rendering</li>
              <li>• MCP protocol integration</li>
              <li>• Error boundary handling</li>
              <li>• Loading states management</li>
              <li>• Memory optimization for large streams</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Bonus Points:</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Implement backpressure handling</li>
              <li>• Add stream cancellation</li>
              <li>• Create custom hooks for streaming</li>
              <li>• Add comprehensive error recovery</li>
              <li>• Implement stream reconnection</li>
              <li>• Add performance monitoring</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
