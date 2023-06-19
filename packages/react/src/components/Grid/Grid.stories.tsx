import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { type GridProps } from "./Grid.types";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Components/Grid",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<GridProps>;

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
    <Content>Box 1</Content>
    <Content>Box 2</Content>
    <Content>Box 3</Content>
    <Content>Box 4</Content>
    <Content>Box 5</Content>
    <Content>Box 6</Content>
    <Content>Box 7</Content>
    <Content>Box 8</Content>
    <Content>Box 9</Content>
  </>
);

export const Default: Story = {
  args: {
    children: <Children />,
  },
};

export const Spacing: Story = {
  args: {
    spacing: 8,
    children: <Children />,
  },
};

export const MinItemWidth: Story = {
  args: {
    spacing: 2,
    itemMinWidth: "350px",
    children: <Children />,
  },
};
