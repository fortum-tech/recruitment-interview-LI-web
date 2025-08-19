import type { Meta, StoryObj } from "@storybook/react";
import { StreamingBasic } from "../StreamingBasic";

const meta: Meta<typeof StreamingBasic> = {
  title: "Components/StreamingBasic",
  component: StreamingBasic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMockData: Story = {
  parameters: {
    mockData: [
      {
        url: "/api/stream-data",
        method: "GET",
        status: 200,
        response: {
          //TODO:
          chunks: [],
        },
      },
    ],
  },
};
