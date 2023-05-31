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

// Size
export const SizeDefault: Story = {
  args: {
    children: "Default",
    size: ButtonSize.DEFAULT,
  },
};

export const SizeSmall: Story = {
  args: {
    children: "Small",
    size: ButtonSize.SMALL,
  },
};

export const SizeLarge: Story = {
  args: {
    children: "Large",
    size: ButtonSize.LARGE,
  },
};

// Kind
export const KindDefault: Story = {
  args: {
    children: "Default",
    kind: ButtonKind.DEFAULT,
  },
};

export const KindOutline: Story = {
  args: {
    children: "Outline",
    kind: ButtonKind.OUTLINE,
  },
};

export const KindPrimary: Story = {
  args: {
    children: "Primary",
    kind: ButtonKind.PRIMARY,
  },
};

export const KindSubtle: Story = {
  args: {
    children: "Subtle",
    kind: ButtonKind.SUBTLE,
  },
};

export const KindLink: Story = {
  args: {
    children: "Link",
    kind: ButtonKind.LINK,
  },
};

// Others
export const Color: Story = {
  args: {
    children: "Color",
    color: "#068000",
  },
  render: (args) => (
    <>
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
    </>
  ),
};

export const Depth: Story = {
  args: {
    children: "Depth",
    kind: ButtonKind.OUTLINE,
    size: ButtonSize.LARGE,
    hasDepth: true,
  },
};

export const NoSpacing: Story = {
  args: {
    children: "No Spacing",
    kind: ButtonKind.LINK,
    hasNoSpacing: true,
  },
};
