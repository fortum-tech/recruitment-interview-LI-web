import type { Meta, StoryObj } from "@storybook/react";
import { MCPClient } from "../MCPClient";

const meta: Meta<typeof MCPClient> = {
  title: "Components/MCPClient",
  component: MCPClient,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithErrorResponse: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows how the component handles MCP protocol errors",
      },
    },
  },
};
