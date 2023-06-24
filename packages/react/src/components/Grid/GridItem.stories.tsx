import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "./Grid";
import { type GridItemProps } from "./Grid.types";

const meta: Meta<typeof GridItem> = {
  component: GridItem,
  title: "Layout/GridItem",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    spanColumns: {
      control: "number",
      description: "Expand Item to specific number to columns",
    },
    spanRows: {
      control: "number",
      description: "Expand Item to specific number to rows",
    },
  },
};

export default meta;

type Story = StoryObj<GridItemProps>;

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

export const Default: Story = {
  args: {
    children: <Content>Item</Content>,
  },
  render: (args) => (
    <Grid>
      <GridItem {...args}>{args.children}</GridItem>
    </Grid>
  ),
};
