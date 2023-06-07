import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
