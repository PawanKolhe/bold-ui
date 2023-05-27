import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { type ButtonProps } from "./Button.types";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

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
