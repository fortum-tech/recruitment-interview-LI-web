import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitment Interview Task - Streaming Data App",
  description:
    "A Next.js application demonstrating streaming data fetching and rendering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Streaming Data Demo</h1>
            <p className="text-blue-100">
              Interview Task - Data Fetching & Rendering
            </p>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>Built with Next.js, React, and TypeScript</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
