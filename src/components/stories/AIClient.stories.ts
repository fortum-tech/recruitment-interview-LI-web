import type { Meta, StoryObj } from "@storybook/react";
import { AIClient } from "../AIClient";

const meta: Meta<typeof AIClient> = {
  title: "Components/AIClient",
  component: AIClient,
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
        story: "AIClient",
      },
    },
  },
};
