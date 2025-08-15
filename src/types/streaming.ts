export interface DataChunk {
  id: string;
  title: string;
  content: string;
  timestamp: number;
  metadata?: {
    source?: string;
    category?: string;
    priority?: number;
  };
}

export interface StreamingResponse {
  chunks: DataChunk[];
  hasMore: boolean;
  nextCursor?: string;
}

export interface MCPRequest {
  method: string;
  params?: Record<string, any>;
}

export interface MCPResponse {
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}
