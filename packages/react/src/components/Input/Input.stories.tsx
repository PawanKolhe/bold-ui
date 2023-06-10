import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../Stack";
import { Input } from "./Input";
import { InputSize } from "./Input.types";
import { FaUserAlt } from "react-icons/fa";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    defaultValue: "Default",
  },
};

// Sizes
export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Stack direction="column" spacing={4}>
      <Input {...args} size={InputSize.SMALL} />
      <Input {...args} size={InputSize.DEFAULT} />
      <Input {...args} size={InputSize.LARGE} />
      <Input {...args} size={InputSize.X_LARGE} />
    </Stack>
  ),
};

// Icons
export const Icons: Story = {
  args: {},
  render: (args) => (
    <Stack direction="column" spacing={4}>
      <Input {...args} size={InputSize.SMALL} icon={<FaUserAlt />} />
      <Input {...args} size={InputSize.DEFAULT} icon={<FaUserAlt />} />
      <Input {...args} size={InputSize.LARGE} icon={<FaUserAlt />} />
      <Input {...args} size={InputSize.X_LARGE} icon={<FaUserAlt />} />
    </Stack>
  ),
};

// Others
export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled",
  },
  render: (args) => (
    <Stack direction="column" spacing={4}>
      <Input {...args} />
      <Input {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

export const Error: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <Stack direction="column" spacing={4}>
      <Input {...args} />
      <Input {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

export const Success: Story = {
  args: {
    success: true,
  },
  render: (args) => (
    <Stack direction="column" spacing={4}>
      <Input {...args} />
      <Input {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};
