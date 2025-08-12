import { NextRequest } from 'next/server'
import { DataChunk } from '@/types/streaming'

// Mock data generator - in real implementation, this would fetch from MCP protocol
function generateMockData(): DataChunk[] {
  const categories = ['news', 'tech', 'science', 'business']
  const sources = ['api-1', 'api-2', 'mcp-server', 'external-service']
  
  return Array.from({ length: 20 }, (_, i) => ({
    id: `chunk-${i + 1}`,
    title: `Data Chunk ${i + 1}`,
    content: `This is sample content for chunk ${i + 1}. In a real implementation, this would be fetched from an MCP server or external API.`,
    timestamp: Date.now() + i * 1000,
    metadata: {
      source: sources[Math.floor(Math.random() * sources.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      priority: Math.floor(Math.random() * 5) + 1
    }
  }))
}

export async function GET(request: NextRequest) {
  // TODO: Candidates should implement proper streaming response
  // This is a basic implementation that needs to be improved
  
  const encoder = new TextEncoder()
  const mockData = generateMockData()
  
  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Simulate streaming by sending chunks with delays
        for (const chunk of mockData) {
          // Send the chunk as JSON
          const chunkData = JSON.stringify(chunk) + '\n'
          controller.enqueue(encoder.encode(chunkData))
          
          // Add delay to simulate real streaming
          await new Promise(resolve => setTimeout(resolve, 200))
        }
        
        controller.close()
      } catch (error) {
        controller.error(error)
      }
    }
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}

// TODO: Implement POST method for MCP protocol requests
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // TODO: Implement MCP protocol communication
    // This is where candidates should implement the actual MCP client
    
    return Response.json({
      error: {
        code: -32601,
        message: 'MCP protocol not implemented yet - this is part of the challenge!'
      }
    }, { status: 501 })
    
  } catch (error) {
    return Response.json({
      error: {
        code: -32700,
        message: 'Parse error'
      }
    }, { status: 400 })
  }
}
