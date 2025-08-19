# Recruitment Interview Task - Streaming Data Application

A Next.js application for steam based data fetching and rendering and an AI-model integration.

## 🎯 Challenge Overview

This is a recruitment interview task where candidates need to implement a streaming data and UI rendering solution in a next.js application and get help from an AI model for getting some actual up-to-date data. The application provides a foundation that needs to be completed.

The task is designed to take 5-8 hours and covers multiple skill areas.

You are allowed to use any AI tools or other helpers you'd use normally in your development work.

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

```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Task Requirements

### Core Features to Implement

1. **Basic Streaming With Mock Data**

   - Implement basic UI-component for displaying the streamed
     contract data based on the mock data you get from the mock-API
     already. See [main page](./src/app/page.tsx) and [StreamingBasic.tsx](./src/components/StreamingBasic.tsx) for more details.

2. **Streaming from an AI model**

   - Use the same Contract displaying UI component as in the previous
     stage of this challange, but now try to stream responses from an
     AI model (such as Google Gemini). The model should help retrieve information about Fortum's electricity contracts based on the current content of this page:
     https://www.fortum.com/fi/sahkoa/en/electricity-for-home . See [main page](./src/app/page.tsx) and [AIClient.tsx](./src/components/AIClient.tsx) for more details.

### Submitting the task

- When you are done open a PR to the private fork repository you were working on.

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── streaming/         # Streaming mock response
├── components/            # React components
│   ├── StreamingBasic.tsx  # Main streaming component (needs implementation)
│   ├── AIClient.tsx      # AI client (needs implementation)
│   └── stories/           # Storybook stories
├── hooks/                 # Custom React hooks if needed
└── types/                 # TypeScript type definitions
```

## 📚 API Documentation

### Streaming Endpoint

**GET** `/api/stream-data`

Returns streaming JSON data chunks:

```
Content-Type: application/json
Cache-Control: no-cache

{
   contractTitle: "MOCK Fortum Duo 24 month",
   contractDescription:
   "Mostly fixed price, with a hint of spot pricing. You can influence the price of your electricity with the consumption effect. 2-years fixed base price level.",
   contractPriceMonthly: "5,99 €/month",
   contractPriceElectricity: "7,79 c/kWh +/- Consumption impact",
}
```

## 🧪 Testing

```bash
# Run tests (if implemented)
npm test

# Run Storybook for component testing
npm run storybook
```

## 🎨 Storybook

Component stories are available at [http://localhost:6006](http://localhost:6006) when running Storybook.

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
- [Newline-delimited JSON](https://en.wikipedia.org/wiki/JSON_streaming#Newline-delimited_JSON)

## 🤔 Evaluation Criteria

Candidates will be evaluated on:

1. **Code Quality**: Clean, readable, and maintainable code. Also UI/UX and performance aspects are considered.
2. **Researching**: Researching and exploring new ways of getting the challenge done in some way or another.
3. **Prioritization**: You should also choose where you invest time in the challenge, so if you e.g. leave the UI more unfinished over being able to focus on the AI streaming part, so that can be considered a valid choice.
4. **Error Handling**: Robust basic error recovery.
5. **Testing**: Good enough test coverage.
6. **Documentation**: Documenting the approach you have taken when opening the submission PR.

Good luck with the implementation! 🚀
