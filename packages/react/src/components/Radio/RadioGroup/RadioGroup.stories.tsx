import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { type RadioOption, type RadioGroupProps } from "./RadioGroup.types";
import { useState } from "react";
import { Stack } from "../../Stack";
import { Radio } from "../Radio";
import { type RadioValueType } from "../Radio.types";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Inputs/RadioGroup",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<RadioGroupProps>;

const options: RadioOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4", disabled: true },
  { label: "Option 5", value: "5" },
];

const optionsWithDescription: RadioOption[] = options.map((option) => ({
  ...option,
  description: "This is a description",
}));

export const Default: Story = {
  args: {
    options,
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultValue: "2",
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
    defaultValue: "2",
    options,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <RadioGroup {...args} options={options} size="small" />
      <RadioGroup {...args} options={options} size="default" />
      <RadioGroup {...args} options={options} size="large" />
    </Stack>
  ),
};

export const Direction: Story = {
  args: {
    defaultValue: "2",
    options,
    direction: "vertical",
  },
};

export const Description: Story = {
  args: {
    defaultValue: "2",
    options: optionsWithDescription,
  },
};

export const Spacing: Story = {
  args: {
    defaultValue: "2",
    options,
    spacing: 10,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "2",
    options,
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "2",
    options,
  },
};

const ControlledRadioGroup = (args: RadioGroupProps) => {
  const [radioGroupValue, setRadioGroupValue] = useState<
    RadioValueType | undefined
  >();

  return (
    <RadioGroup
      {...args}
      value={radioGroupValue}
      onChange={(value) => {
        setRadioGroupValue(value);
      }}
    >
      <Stack direction="vertical" spacing={4}>
        <Radio label="Radio 1" value="1" />
        <Radio label="Radio 2" value="2" />
        <Radio label="Radio 3" value="3" />
        Value: {radioGroupValue}
      </Stack>
    </RadioGroup>
  );
};

export const Controlled: Story = {
  args: {},
  render: ControlledRadioGroup,
};
