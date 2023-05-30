import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { type ButtonProps } from "./Button.types";

const meta: Meta<ButtonProps> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
  },
};

export const Depth: Story = {
  args: {
    children: "Depth",
    hasDepth: true,
  },
};
