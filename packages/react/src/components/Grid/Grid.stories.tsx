import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "./Grid";
import { type GridProps } from "./Grid.types";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Layout/Grid",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    spacing: {
      control: "number",
      defaultValue: 0,
      description: "Spacing between children nodes.",
    },
    columns: {
      control: "number",
      defaultValue: 0,
      type: "number",
      description: "Number of columns in grid",
    },
    rows: {
      control: "number",
      defaultValue: 0,
      description: "Number of rows in grid",
    },
    itemMinWidth: {
      control: "text",
      defaultValue: "200px",
      description: "Minimum width of each item in the grid",
    },
    auto: {
      control: "boolean",
      defaultValue: true,
      description:
        "Automatically determine column or rows according to space required by items and available space. Passing rows or columns props will override this option.",
    },
    dense: {
      control: "boolean",
      description:
        'When true, "dense" packing algorithm is used to attempt to fill in holes earlier in the grid. When false, "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes.',
    },
    inline: { control: "boolean" },
  },
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
      height: height ?? "100%",
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

export const ColumnSpan: Story = {
  args: {
    columns: 3,
    rows: 2,
    children: (
      <>
        <GridItem>
          <Content>Item 1</Content>
        </GridItem>
        <GridItem>
          <Content>Item 2</Content>
        </GridItem>
        <GridItem spanColumns={2}>
          <Content>Item 3</Content>
        </GridItem>
        <GridItem>
          <Content>Item 4</Content>
        </GridItem>
        <GridItem>
          <Content>Item 5</Content>
        </GridItem>
        <GridItem>
          <Content>Item 6</Content>
        </GridItem>
      </>
    ),
  },
};

export const RowSpan: Story = {
  args: {
    columns: 3,
    rows: 2,
    children: (
      <>
        <GridItem>
          <Content>Item 1</Content>
        </GridItem>
        <GridItem>
          <Content>Item 2</Content>
        </GridItem>
        <GridItem spanRows={2}>
          <Content>Item 3</Content>
        </GridItem>
        <GridItem>
          <Content>Item 4</Content>
        </GridItem>
        <GridItem>
          <Content>Item 5</Content>
        </GridItem>
        <GridItem>
          <Content>Item 6</Content>
        </GridItem>
      </>
    ),
  },
};

export const Dense: Story = {
  args: {
    columns: 2,
    rows: 2,
    dense: true,
    children: (
      <>
        <GridItem>
          <Content>Item 1</Content>
        </GridItem>
        <GridItem>
          <Content>Item 2</Content>
        </GridItem>
        <GridItem>
          <Content>Item 3</Content>
        </GridItem>
        <GridItem spanColumns={2}>
          <Content>Item 4</Content>
        </GridItem>
        <GridItem>
          <Content>Item 5</Content>
        </GridItem>
        <GridItem>
          <Content>Item 6</Content>
        </GridItem>
      </>
    ),
  },
};

export const Inline: Story = {
  args: {
    columns: 2,
    rows: 2,
    inline: true,
    children: (
      <>
        <GridItem>
          <Content>Item 1</Content>
        </GridItem>
        <GridItem>
          <Content>Item 2</Content>
        </GridItem>
        <GridItem>
          <Content>Item 3</Content>
        </GridItem>
        <GridItem spanColumns={2}>
          <Content>Item 4</Content>
        </GridItem>
        <GridItem>
          <Content>Item 5</Content>
        </GridItem>
        <GridItem>
          <Content>Item 6</Content>
        </GridItem>
      </>
    ),
  },
};
