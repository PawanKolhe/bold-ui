import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../Stack";
import { Input } from "./Input";
import { InputKind, type InputProps, InputSize } from "./Input.types";
import { FaUserAlt } from "react-icons/fa";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Inputs/Input",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

const MultipleInputKinds = ({ ...args }: InputProps) => (
  <Stack spacing={4} direction="vertical">
    <Input kind={InputKind.DEFAULT} placeholder="Default" {...args} />
    <Input kind={InputKind.FILLED} placeholder="Filled" {...args} />
    <Input kind={InputKind.UNSTYLED} placeholder="Unstyled" {...args} />
  </Stack>
);

const MultipleInputSizes = ({ ...args }: InputProps) => (
  <Stack spacing={4} direction="vertical">
    <Input size={InputSize.SMALL} placeholder="Small" {...args} />
    <Input size={InputSize.DEFAULT} placeholder="Default" {...args} />
    <Input size={InputSize.LARGE} placeholder="Large" {...args} />
    <Input size={InputSize.X_LARGE} placeholder="X-Large" {...args} />
  </Stack>
);

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

// Sizes
export const Sizes: Story = {
  args: {},
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

export const Compact: Story = {
  args: {
    compact: true,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

// Kinds
export const Kinds: Story = {
  args: {},
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

// Icons
export const Icons: Story = {
  args: {
    icon: <FaUserAlt />,
  },
  render: (args) => <MultipleInputSizes {...args} />,
};

// Others
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} defaultValue="Some value" />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

export const Clearable: Story = {
  args: {
    clearable: true,
    placeholder: "Clearable",
  },
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
    </Stack>
  ),
};

export const Error: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <MultipleInputKinds {...args} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} />
      <MultipleInputKinds {...args} icon={<FaUserAlt />} disabled />
    </Stack>
  ),
};

const ControlledInput = (args: InputProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <Stack direction="vertical" spacing={4}>
      <Input
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </Stack>
  );
};

export const Controlled: Story = {
  args: {
    placeholder: "Type something...",
    clearable: true,
    icon: <FaUserAlt />,
  },
  render: ControlledInput,
};
