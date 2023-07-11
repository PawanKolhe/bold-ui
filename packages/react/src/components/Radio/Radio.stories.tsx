import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { type RadioProps } from "./Radio.types";
import { Stack } from "../Stack";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Inputs/Radio",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: "This is a Label",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <Radio {...args} label="Unchecked" />
      <Radio {...args} label="Checked" checked={true} />
    </Stack>
  ),
};

export const Sizes: Story = {
  args: {
    label: "Label",
  },
  render: (args) => (
    <Stack direction="vertical" spacing={6}>
      <Radio {...args} size="small" label="Small" />
      <Radio {...args} size="default" label="Default" />
      <Radio {...args} size="large" label="Large" />
    </Stack>
  ),
};

export const Error: Story = {
  args: {
    label: "There is an error",
    error: true,
  },
};
