import Link from "next/link";
import { StreamingBasic } from "@/components/StreamingBasic";
import { AIClient } from "@/components/AIClient";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">
            Streaming Data Implementation
          </h2>
          <p className="text-gray-700 mb-6">
            This application demonstrates streaming data fetching and rendering.
            Your task is to implement a data streaming functionality that
            fetches data from an API and renders new visual results as soon as
            it gets new data chunks.
          </p>
          <p className="text-gray-700 mb-6">
            You are allowed to use any AI tools or other helpers you'd use
            normally in your development work.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            1. Basic Streaming with mock data
          </h3>
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">
              🔧 TODO: Basic UI component implementation
            </h4>
            <div className="text-sm text-orange-700">
              <ul className="text-sm text-blue-700 space-y-1">
                <li>
                  • Implement the needed UI component(s) that can be rendered
                  here below in the gray box to show contract data in a
                  user-friendly format.
                </li>
                <li>
                  • The UI component(s) should display the streamed electricity
                  contract datas so that individual contracts' contractTitle and
                  prices are shown in the first view, but then upon clicking the
                  component you can somehow nicely see the contractDescription.
                </li>
                <li>
                  • Render visual results as soon as complete data chunks arrive
                </li>
                <li>
                  • Implement good enough quality assurance for the
                  component/logic
                </li>
                <li>
                  •{" "}
                  <a
                    href="img/Screenshot 2025-08-19 at 8.35.36.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    See example screenshot with json data rendered here below
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-4" />
          <StreamingBasic />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Streaming Client</h3>
          <p className="text-gray-600 mb-4">
            2. This part should implement streamable communication with an AI
            model
          </p>
          <AIClient />
        </section>
      </div>
    </div>
  );
}
