import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { userEvent, waitFor, within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    onClick: jest.fn()
  },
  parameters: {
    jest: 'Button',
  }
};


Primary.play = async ({ canvasElement, args, step }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  
  await step('test', async () => {

    await step('inside - 1',async () => {
      expect(button).not.toBeNull()
      await userEvent.click(button)
  
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })

    await step('inside - 2',async () => {
      expect(button).not.toBeNull()
      await userEvent.click(button)
  
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  })

}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

