import Link from "next/link";
import { StreamingDemo } from "@/components/StreamingDemo";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to the Streaming Data Challenge
        </h2>
        <p className="text-gray-700 mb-4">
          This application demonstrates streaming data fetching and rendering.
          Your task is to implement efficient streaming functionality that
          fetches data from an API and renders it in real-time chunks.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              🎯 Your Challenge
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Implement streaming data fetching</li>
              <li>• Render data chunks as they arrive</li>
              <li>• Handle loading and error states</li>
              <li>• Optimize for performance</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">🛠 Tech Stack</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Next.js 15 with App Router</li>
              <li>• React Server Components</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Storybook for components</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Demo Components</h3>
        <div className="space-y-4">
          <Link
            href="/streaming"
            className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
          >
            <h4 className="font-semibold text-blue-800">Streaming Data Demo</h4>
            <p className="text-blue-600 text-sm">
              See the streaming functionality in action
            </p>
          </Link>

          <Link
            href="/api-docs"
            className="block p-4 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
          >
            <h4 className="font-semibold text-purple-800">API Documentation</h4>
            <p className="text-purple-600 text-sm">
              Learn about the available endpoints
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Quick Preview</h3>
        <p className="text-gray-600 mb-4">
          Here's a basic streaming demo component (needs implementation):
        </p>
        <StreamingDemo />
      </section>
    </div>
  );
}
