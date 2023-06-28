import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { type AvatarGroupProps, type AvatarProps } from "./Avatar.types";
import { Stack } from "../Stack/Stack";

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  title: "Data Display/AvatarGroup",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<AvatarProps>;

const AvatarGroupExample = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar kind="fill" name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Avatar kind="fill" name="Amrit Girish" />
    <Avatar kind="fill" src="https://bit.ly/kent-c-dodds" />
    <Avatar kind="fill" src="https://bit.ly/prosper-baba" />
    <Avatar
      kind="fill"
      name="Pawan Kolhe"
      src="https://avatars.githubusercontent.com/PawanKolhe"
    />
    <Avatar kind="fill" />
    <Avatar>+5</Avatar>
  </AvatarGroup>
);

export const Default: Story = {
  args: {},
  render: (args) => (
    <Stack direction="vertical" spacing={4}>
      <AvatarGroupExample>{args.children}</AvatarGroupExample>
      <AvatarGroupExample spacing={1}>{args.children}</AvatarGroupExample>
      <AvatarGroupExample spacing={3.5}>{args.children}</AvatarGroupExample>
    </Stack>
  ),
};
