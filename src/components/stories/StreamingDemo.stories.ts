import type { Meta, StoryObj } from '@storybook/react'
import { StreamingDemo } from '../StreamingDemo'

const meta: Meta<typeof StreamingDemo> = {
  title: 'Components/StreamingDemo',
  component: StreamingDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMockData: Story = {
  parameters: {
    mockData: [
      {
        url: '/api/stream-data',
        method: 'GET',
        status: 200,
        response: {
          chunks: [
            {
              id: 'story-1',
              title: 'Story Mock Data',
              content: 'This is mock data for Storybook',
              timestamp: Date.now(),
            },
          ],
        },
      },
    ],
  },
}
