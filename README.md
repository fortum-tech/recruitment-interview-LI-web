# Recruitment Interview Task - Streaming Data Application

A Next.js application demonstrating streaming data fetching and rendering with MCP (Model Context Protocol) integration.

## 🎯 Challenge Overview

This is a recruitment interview task where candidates need to implement efficient streaming data functionality. The application provides a foundation with partial implementations that need to be completed.

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or later
- npm, pnpm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Storybook (for component development)
npm run storybook

# Run local mcp gemini server
node mcp-gemini-server.js
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Task Requirements

### Core Features to Implement

1. **Streaming Data Processing**

   - Implement efficient ReadableStream processing
   - Handle backpressure and memory management
   - Add proper error handling and recovery

2. **MCP Protocol Integration**

   - Implement MCP (Model Context Protocol) client
   - Add JSON-RPC 2.0 communication
   - Support streaming MCP responses

3. **Real-time Rendering**

   - Optimize chunk rendering performance
   - Implement smooth UI updates
   - Add loading states and error boundaries

4. **Component Development**
   - Complete the StreamingDemo component
   - Implement the MCPClient component
   - Create reusable hooks for streaming

### Bonus Points

- Implement stream cancellation and reconnection
- Add comprehensive error recovery mechanisms
- Create custom hooks for streaming data management
- Implement performance monitoring and metrics
- Add unit and integration tests
- Optimize for large data streams

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── streaming/         # Streaming demo page
│   └── api-docs/          # API documentation
├── components/            # React components
│   ├── StreamingDemo.tsx  # Main streaming component (needs implementation)
│   ├── MCPClient.tsx      # MCP protocol client (needs implementation)
│   └── stories/           # Storybook stories
├── hooks/                 # Custom React hooks
│   └── useStreaming.ts    # Streaming hook (needs implementation)
├── lib/                   # Utility libraries
│   └── mcp-client.ts      # MCP client class (needs implementation)
└── types/                 # TypeScript type definitions
    └── streaming.ts       # Streaming-related types
```

## 🔧 Implementation Status

### ✅ Completed

- Basic Next.js setup with TypeScript
- Project structure and routing
- Basic UI components and styling
- Storybook configuration
- Type definitions

### ⚠️ Partially Implemented

- Basic streaming endpoint (`/api/stream-data`)
- StreamingDemo component (basic structure)
- useStreaming hook (stub implementation)

### ❌ Needs Implementation

- Efficient stream processing logic
- MCP protocol communication
- Error handling and recovery
- Performance optimizations
- Stream cancellation
- Comprehensive testing

## 📚 API Documentation

### Streaming Endpoint

**GET** `/api/stream-data`

Returns streaming JSON data chunks:

```
Content-Type: application/json
Cache-Control: no-cache

{"id":"chunk-1","title":"Data Chunk 1","content":"...","timestamp":1234567890}
{"id":"chunk-2","title":"Data Chunk 2","content":"...","timestamp":1234567891}
```

### MCP Protocol Endpoint

**POST** `/api/stream-data`

Accepts MCP protocol requests (needs implementation):

```json
{
  "method": "list_resources",
  "params": {
    "cursor": "optional-cursor"
  }
}
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run Storybook for component testing
npm run storybook
```

## 💡 Implementation Hints

### Streaming Best Practices

- Use `ReadableStream` for memory-efficient processing
- Implement proper backpressure handling
- Add stream cancellation support
- Handle network interruptions gracefully

### MCP Protocol

- Follow JSON-RPC 2.0 specification
- Implement proper error codes and handling
- Support both request/response and streaming patterns
- Add connection lifecycle management

### Performance Considerations

- Avoid blocking the main thread
- Implement virtual scrolling for large datasets
- Use React.memo and useMemo for optimization
- Consider Web Workers for heavy processing

## 🎨 Storybook

Component stories are available at [http://localhost:6006](http://localhost:6006) when running Storybook.

Stories include:

- StreamingDemo component variations
- MCPClient component states
- Error handling scenarios

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)
- [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)

## 🤔 Evaluation Criteria

Candidates will be evaluated on:

1. **Code Quality**: Clean, readable, and maintainable code
2. **Performance**: Efficient streaming and rendering implementation
3. **Error Handling**: Robust error recovery and user feedback
4. **Architecture**: Well-structured and scalable solution
5. **Testing**: Comprehensive test coverage
6. **Documentation**: Clear code comments and documentation

## 🚧 Known Issues

- MCP protocol integration is not implemented
- Stream processing needs optimization
- Error handling is incomplete
- Performance monitoring is missing
- Tests need to be written

Good luck with the implementation! 🚀
