import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonSize, type ButtonProps, ButtonKind } from "./Button.types";

const meta: Meta<ButtonProps> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    color: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: "1rem" }}>{children}</div>
);

// Size
export const SizeDefault: Story = {
  args: {
    children: "Default",
    size: ButtonSize.DEFAULT,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.SUBTLE}>
        Subtle
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const SizeSmall: Story = {
  args: {
    children: "Small",
    size: ButtonSize.SMALL,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.SUBTLE}>
        Subtle
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const SizeLarge: Story = {
  args: {
    children: "Large",
    size: ButtonSize.LARGE,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.SUBTLE}>
        Subtle
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

// Others
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.SUBTLE}>
        Subtle
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const Color: Story = {
  args: {
    children: "Color",
    color: "#068000",
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.SUBTLE}>
        Subtle
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const Depth: Story = {
  args: {
    children: "Depth",
    kind: ButtonKind.OUTLINE,
    hasDepth: true,
  },
  render: (args) => (
    <Container>
      <Button {...args} size={ButtonSize.SMALL}>
        Small
      </Button>
      <Button {...args} size={ButtonSize.DEFAULT}>
        Default
      </Button>
      <Button {...args} size={ButtonSize.LARGE}>
        Large
      </Button>
    </Container>
  ),
};

export const NoSpacing: Story = {
  args: {
    children: "No Spacing",
    kind: ButtonKind.LINK,
    noSpacing: true,
  },
};
