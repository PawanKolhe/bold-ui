import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { type CheckboxProps } from "./Checkbox.types";
import { useState } from "react";
import { Stack } from "../Stack";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Inputs/Checkbox",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {},
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Label: Story = {
  args: {
    label: "This is a Label",
  },
};

export const Description: Story = {
  args: {
    label: "This is a Label",
    description: "This is a description",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    description: "This is a description",
    disabled: true,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <Checkbox {...args} label="Unchecked" />
      <Checkbox {...args} label="Checked" defaultChecked />
    </Stack>
  ),
};

export const Sizes: Story = {
  args: {
    label: "Label",
    description: "This is a description",
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <Checkbox {...args} size="small" label="Small" />
      <Checkbox {...args} size="default" label="Default" />
      <Checkbox {...args} size="large" label="Large" />
    </Stack>
  ),
};

const ControlledCheckbox = (args: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Stack direction="vertical" spacing={4}>
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={(checked) => {
          setIsChecked(checked);
        }}
      />
    </Stack>
  );
};

export const Error: Story = {
  args: {
    label: "There is an error",
    error: true,
  },
  render: ControlledCheckbox,
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate checkbox",
    indeterminate: true,
    defaultChecked: true,
  },
  render: ControlledCheckbox,
};

export const Controlled: Story = {
  args: {
    label: "Controlled Label",
  },
  render: ControlledCheckbox,
};
