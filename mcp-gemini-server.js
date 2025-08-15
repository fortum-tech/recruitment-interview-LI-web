//You can also use some other language model than gemini

const { WebSocketServer } = require("ws");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4000;
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY missing in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

const wss = new WebSocketServer({ port });
console.log(`🚀 MCP Gemini server running on ws://localhost:${port}`);

// Utility to send JSON-RPC messages
function sendJson(ws, msg) {
  ws.send(JSON.stringify(msg));
}

wss.on("connection", (ws) => {
  ws.on("message", async (raw) => {
    let req;
    try {
      req = JSON.parse(raw.toString());
    } catch (err) {
      return sendJson(ws, {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      });
    }

    const { id, method, params } = req;

    if (method === "generateCities") {
      try {
        const model = genAI.getGenerativeModel({
          model: params.model || "gemini-1.5-pro",
        });

        const systemPrompt = `
            You are a data API. 
            Return the cities in the world **in JSON format only**.
            Each object must look like this:
            {"cityName": "City", "population": 12345678, "publicImg": "https://...", "country": "Country"}.
            For each, include a real public image URL (e.g. from Wikimedia Commons or Unsplash).
            Output them one object per line (NDJSON format), respond in chunks as soon as you can.
            Do not include explanations, markdown, or extra text.

            User prompt: ${params.prompt}`;

        console.log("systemPrompt", systemPrompt);
        const resultStream = await model.generateContentStream(systemPrompt);

        for await (const chunk of resultStream.stream) {
          const textPart = chunk.text();
          if (textPart) {
            sendJson(ws, {
              jsonrpc: "2.0",
              id,
              result: { chunk: textPart },
            });
          }
        }

        sendJson(ws, {
          jsonrpc: "2.0",
          id,
          result: { done: true },
        });
      } catch (err) {
        sendJson(ws, {
          jsonrpc: "2.0",
          id,
          error: { code: -32000, message: err.message },
        });
      }
    } else {
      sendJson(ws, {
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: "Method not found" },
      });
    }
  });
});
