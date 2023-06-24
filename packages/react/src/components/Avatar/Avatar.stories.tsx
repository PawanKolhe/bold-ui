import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { type AvatarProps } from "./Avatar.types";
import { Stack } from "../Stack/Stack";
import { BiUserCircle } from "react-icons/bi";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Data Display/Avatar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  args: {
    src: "https://bit.ly/dan-abramov",
  },
  render: (args) => {
    return (
      <Stack direction="vertical" spacing={4}>
        <Stack spacing={4}>
          <Avatar size="small" />
          <Avatar size="default" />
          <Avatar size="large" />
          <Avatar size="x-large" />
        </Stack>
        <Stack spacing={4}>
          <Avatar size="small" {...args} />
          <Avatar size="default" {...args} />
          <Avatar size="large" {...args} />
          <Avatar size="x-large" {...args} />
        </Stack>
      </Stack>
    );
  },
};

export const Kinds: Story = {
  args: {
    name: "Pawan Kolhe",
  },
  render: (args) => {
    return (
      <Stack direction="vertical" spacing={4}>
        <Stack spacing={4}>
          <Avatar kind="light" />
          <Avatar kind="fill" />
          <Avatar kind="outline" />
        </Stack>
        <Stack spacing={4}>
          <Avatar kind="light" {...args} />
          <Avatar kind="fill" {...args} />
          <Avatar kind="outline" {...args} />
        </Stack>
      </Stack>
    );
  },
};

export const ImageURL: Story = {
  args: {
    src: "https://bit.ly/dan-abramov",
  },
};

export const Name: Story = {
  args: {
    name: "Pawan Kolhe",
  },
};

export const Colors: Story = {
  args: {
    name: "Pawan Kolhe",
  },
  render: (args) => {
    return (
      <Stack direction="vertical" spacing={4}>
        <Stack spacing={4}>
          <Avatar color="var(--boldui-color-grey-600)" />
          <Avatar color="#EC4A0A" />
          <Avatar color="#5341AE" />
          <Avatar color="#047481" />
        </Stack>
        <Stack spacing={4}>
          <Avatar color="var(--boldui-color-grey-600)" {...args} />
          <Avatar color="#EC4A0A" {...args} />
          <Avatar color="#5341AE" {...args} />
          <Avatar color="#047481" {...args} />
        </Stack>
      </Stack>
    );
  },
};

export const BorderRadius: Story = {
  args: {
    borderRadius: "4px",
    src: "https://bit.ly/dan-abramov",
  },
  render: (args) => {
    return (
      <Stack direction="vertical" spacing={4}>
        <Stack spacing={4}>
          <Avatar kind="light" {...args} src="https://bit.ly/broken-link" />
          <Avatar kind="fill" {...args} src="https://bit.ly/broken-link" />
          <Avatar kind="outline" {...args} src="https://bit.ly/broken-link" />
        </Stack>
        <Stack spacing={4}>
          <Avatar
            kind="light"
            {...args}
            src="https://bit.ly/broken-link"
            name="Pawan Kolhe"
          />
          <Avatar
            kind="fill"
            {...args}
            src="https://bit.ly/broken-link"
            name="Pawan Kolhe"
          />
          <Avatar
            kind="outline"
            {...args}
            src="https://bit.ly/broken-link"
            name="Pawan Kolhe"
          />
        </Stack>
        <Stack spacing={4}>
          <Avatar kind="light" {...args} />
          <Avatar kind="fill" {...args} />
          <Avatar kind="outline" {...args} />
        </Stack>
      </Stack>
    );
  },
};

export const CustomPlaceholder: Story = {
  args: {
    children: "👴",
    color: "blue",
    kind: "outline",
  },
};

export const BrokenLink: Story = {
  args: {
    src: "https://bit.ly/broken-link",
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <BiUserCircle />,
  },
};
