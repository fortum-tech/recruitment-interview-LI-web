import { NextRequest } from "next/server";

export type ElectricityContractChunk = {
  contractTitle: string;
  contractDescription: string;
  contractPriceMonthly: string;
  contractPriceElectricity: string;
};

const mockContracts = [
  {
    contractTitle: "MOCK Fortum Duo 24 month",
    contractDescription:
      "Mostly fixed price, with a hint of spot pricing. You can influence the price of your electricity with the consumption effect. 2-years fixed base price level.",
    contractPriceMonthly: "5,99 €/month",
    contractPriceElectricity: "7,79 c/kWh +/- Consumption impact",
  },
  {
    contractTitle: "MOCK Fortum Duo 12 month",
    contractDescription:
      "Mostly fixed price, with a hint of spot pricing. You can influence the price of your electricity with the consumption effect. 1-year fixed base price level.",
    contractPriceMonthly: "5,99 €/month",
    contractPriceElectricity: "8,19 c/kWh +/- Consumption impact",
  },
  {
    contractTitle: "MOCK Fortum Tarkka",
    contractDescription:
      "Spot-priced contract, you can monitor electricity prices in the Fortum app. You can save by scheduling your consumption at convenient times. Contract is valid as long as you will.",
    contractPriceMonthly: "5,99 €/month",
    contractPriceElectricity:
      "Electricity exchange spot price per hour + 0,59 c/kWh",
  },
];

//Basic data streaming simulation with mock data, no need to change necessarily
export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Simulate streaming by sending chunks with delays
        for (const chunk of mockContracts) {
          // Send the chunk as JSON
          const chunkData = JSON.stringify(chunk) + "\n";
          controller.enqueue(encoder.encode(chunkData));

          // Add delay to simulate real streaming
          await new Promise((resolve) => setTimeout(resolve, 200));
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
