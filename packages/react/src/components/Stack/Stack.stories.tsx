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

const Content = ({
  children,
  style,
  height,
  width,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  height?: string;
  width?: string;
}) => (
  <div
    style={{
      width,
      height,
      padding: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ccebfe",
      boxSizing: "border-box",
      border: "1px solid black",
      borderRadius: "8px",
      ...style,
    }}
  >
    {children}
  </div>
);

const Children = () => (
  <>
    <Content width="120px">Box 1</Content>
    <Content width="140px">Box 2 Box 2 Box 2 Box 2 Box 2 Box 2</Content>
    <Content width="90px">Box 3 Box 3 Box 3 Box 3 Box 3</Content>
    <Content width="80px">Box 4</Content>
  </>
);

export const Default: Story = {
  args: {
    children: <Children />,
  },
};

// Direction
export const DirectionRow: Story = {
  args: {
    direction: "row",
    children: <Children />,
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: "column",
    children: <Children />,
  },
};

export const DirectionRowReverse: Story = {
  args: {
    direction: "row-reverse",
    children: <Children />,
  },
};

export const DirectionColumnReverse: Story = {
  args: {
    direction: "column-reverse",
    children: <Children />,
  },
};

// Gap
export const SpacingNumber: Story = {
  args: {
    spacing: 4,
    children: <Children />,
  },
};

export const SpacingString: Story = {
  args: {
    spacing: "48px",
    children: <Children />,
  },
};

// Align Items
export const AlignItemsStart: Story = {
  args: {
    alignItems: "flex-start",
    children: <Children />,
  },
};

export const AlignItemsCenter: Story = {
  args: {
    alignItems: "center",
    children: <Children />,
  },
};

export const AlignItemsEnd: Story = {
  args: {
    alignItems: "flex-end",
    children: <Children />,
  },
};

// Justify Content
export const JustifyContentStart: Story = {
  args: {
    justifyContent: "flex-start",
    children: <Children />,
  },
};

export const JustifyContentCenter: Story = {
  args: {
    justifyContent: "center",
    children: <Children />,
  },
};

export const JustifyContentEnd: Story = {
  args: {
    justifyContent: "flex-end",
    children: <Children />,
  },
};

export const JustifyContentSpaceBetween: Story = {
  args: {
    justifyContent: "space-between",
    children: <Children />,
  },
};

export const JustifyContentSpaceAround: Story = {
  args: {
    justifyContent: "space-around",
    children: <Children />,
  },
};

export const JustifyContentSpaceEvenly: Story = {
  args: {
    justifyContent: "space-evenly",
    children: <Children />,
  },
};

// Wrapping

const ManyChildren = () => (
  <>
    <Content>Box 1</Content>
    <Content>Box 2</Content>
    <Content>Box 3</Content>
    <Content>Box 4</Content>
    <Content>Box 5</Content>
    <Content>Box 6</Content>
    <Content>Box 7</Content>
    <Content>Box 8</Content>
    <Content>Box 9</Content>
    <Content>Box 10</Content>
    <Content>Box 11</Content>
    <Content>Box 12</Content>
    <Content>Box 13</Content>
    <Content>Box 14</Content>
    <Content>Box 15</Content>
    <Content>Box 16</Content>
  </>
);

export const Wrap: Story = {
  args: {
    wrap: "wrap",
    children: <ManyChildren />,
  },
};

export const WrapReverse: Story = {
  args: {
    wrap: "wrap-reverse",
    children: <ManyChildren />,
  },
};
