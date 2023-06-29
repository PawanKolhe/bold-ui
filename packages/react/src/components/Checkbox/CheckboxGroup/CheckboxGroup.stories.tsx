import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";
import {
  type CheckboxOption,
  type CheckboxGroupProps,
} from "./CheckboxGroup.types";
import { useState } from "react";
import { Stack } from "../../Stack";
import { Checkbox } from "../Checkbox";
import { type CheckboxValueType } from "../Checkbox.types";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: "Inputs/CheckboxGroup",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CheckboxGroupProps>;

const options: CheckboxOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4", disabled: true },
  { label: "Option 5", value: "5" },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultValue: ["2", "5"],
    options,
  },
};

export const Name: Story = {
  args: {
    name: "custom-name",
    options,
  },
};

export const Sizes: Story = {
  args: {
    defaultValue: ["2"],
    options,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <CheckboxGroup {...args} options={options} size="small" />
      <CheckboxGroup {...args} options={options} size="default" />
      <CheckboxGroup {...args} options={options} size="large" />
    </Stack>
  ),
};

export const Direction: Story = {
  args: {
    defaultValue: ["2"],
    options,
    direction: "vertical",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: ["2"],
    options,
  },
};

const ControlledCheckboxGroup = (args: CheckboxGroupProps) => {
  const [checkboxGroupValue, setCheckboxGroupValue] = useState<
    CheckboxValueType[]
  >([]);
  return (
    <CheckboxGroup
      {...args}
      value={checkboxGroupValue}
      onChange={setCheckboxGroupValue}
    >
      <Stack direction="vertical" spacing={4}>
        <Checkbox label="Checkbox 1" value="1" />
        <Checkbox label="Checkbox 2" value="2" />
        <Checkbox label="Checkbox 3" value="3" />
      </Stack>
    </CheckboxGroup>
  );
};

export const Controlled: Story = {
  args: {},
  render: ControlledCheckboxGroup,
};
