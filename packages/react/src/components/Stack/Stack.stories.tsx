import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { type StackProps } from "./Stack.types";

const meta: Meta<StackProps> = {
  component: Stack,
  title: "Components/Stack",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<StackProps>;

const Content = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightblue",
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <Content>Box 1</Content>
        <Content>Box 2</Content>
        <Content>Box 3</Content>
        <Content>Box 4</Content>
      </>
    ),
  },
};

export const DirectionRow: Story = {
  args: {
    direction: "row",
    children: (
      <>
        <Content>Box 1</Content>
        <Content>Box 2</Content>
        <Content>Box 3</Content>
        <Content>Box 4</Content>
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <Content>Box 1</Content>
        <Content>Box 2</Content>
        <Content>Box 3</Content>
        <Content>Box 4</Content>
      </>
    ),
  },
};
