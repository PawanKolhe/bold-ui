import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  ButtonSize,
  type ButtonProps,
  ButtonKind,
  ButtonShape,
} from "./Button.types";

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

const Container = ({
  children,
  direction = "row",
}: {
  children: React.ReactNode;
  direction?: "row" | "column";
}) => (
  <div style={{ display: "flex", gap: "1rem", flexDirection: direction }}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: "Default",
  },
};

// Sizes
export const SizeDefault: Story = {
  args: {
    size: ButtonSize.DEFAULT,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const SizeSmall: Story = {
  args: {
    size: ButtonSize.SMALL,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const SizeLarge: Story = {
  args: {
    size: ButtonSize.LARGE,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

// Shapes
export const Sharp: Story = {
  args: {
    shape: ButtonShape.SHARP,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const Round: Story = {
  args: {
    shape: ButtonShape.ROUND,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
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
    disabled: true,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};

export const Color: Story = {
  args: {},
  render: (args) => {
    const COLOR_1 = "#1f60cc";
    const COLOR_2 = "#5341ae";
    return (
      <Container direction="column">
        <Container>
          <Button {...args} kind={ButtonKind.DEFAULT} color={COLOR_1}>
            Default
          </Button>
          <Button {...args} kind={ButtonKind.PRIMARY} color={COLOR_1}>
            Primary
          </Button>
          <Button {...args} kind={ButtonKind.OUTLINE} color={COLOR_1}>
            Outline
          </Button>
          <Button {...args} kind={ButtonKind.TEXT} color={COLOR_1}>
            Text
          </Button>
          <Button {...args} kind={ButtonKind.LINK} color={COLOR_1}>
            Link
          </Button>
        </Container>
        <Container>
          <Button {...args} kind={ButtonKind.DEFAULT} color={COLOR_2}>
            Default
          </Button>
          <Button {...args} kind={ButtonKind.PRIMARY} color={COLOR_2}>
            Primary
          </Button>
          <Button {...args} kind={ButtonKind.OUTLINE} color={COLOR_2}>
            Outline
          </Button>
          <Button {...args} kind={ButtonKind.TEXT} color={COLOR_2}>
            Text
          </Button>
          <Button {...args} kind={ButtonKind.LINK} color={COLOR_2}>
            Link
          </Button>
        </Container>
      </Container>
    );
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    kind: ButtonKind.PRIMARY,
    isFullWidth: true,
  },
};

export const Depth: Story = {
  args: {
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

export const Danger: Story = {
  args: {
    children: "Delete",
    kind: ButtonKind.PRIMARY,
    isDanger: true,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT} />
      <Button {...args} kind={ButtonKind.PRIMARY} />
      <Button {...args} kind={ButtonKind.OUTLINE} />
      <Button {...args} kind={ButtonKind.TEXT} />
      <Button {...args} kind={ButtonKind.LINK} />
    </Container>
  ),
};

export const Success: Story = {
  args: {
    children: "Finish",
    kind: ButtonKind.PRIMARY,
    isSuccess: true,
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT} />
      <Button {...args} kind={ButtonKind.PRIMARY} />
      <Button {...args} kind={ButtonKind.OUTLINE} />
      <Button {...args} kind={ButtonKind.TEXT} />
      <Button {...args} kind={ButtonKind.LINK} />
    </Container>
  ),
};

export const Icons: Story = {
  args: {
    isIconOnly: true,
  },
  render: (args) => {
    const ICON_1 = {
      icon: "🌎",
      color: "black",
      size: ButtonSize.SMALL,
    };
    const ICON_2 = {
      icon: "🐼",
      color: "#f98306",
      size: ButtonSize.DEFAULT,
    };
    const ICON_3 = {
      icon: "⭐️",
      color: "#f9d509",
      size: ButtonSize.LARGE,
    };
    const ICON_4 = {
      icon: "🎅🏼",
      color: "#e81c35",
      size: ButtonSize.DEFAULT,
      shape: ButtonShape.CIRCLE,
    };
    return (
      <Container direction="column">
        <Container>
          <Button
            {...args}
            kind={ButtonKind.DEFAULT}
            color={ICON_1.color}
            size={ICON_1.size}
          >
            {ICON_1.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.PRIMARY}
            color={ICON_1.color}
            size={ICON_1.size}
          >
            {ICON_1.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.OUTLINE}
            color={ICON_1.color}
            size={ICON_1.size}
          >
            {ICON_1.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.TEXT}
            color={ICON_1.color}
            size={ICON_1.size}
          >
            {ICON_1.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.LINK}
            color={ICON_1.color}
            size={ICON_1.size}
          >
            {ICON_1.icon}
          </Button>
        </Container>
        <Container>
          <Button
            {...args}
            kind={ButtonKind.DEFAULT}
            color={ICON_2.color}
            size={ICON_2.size}
          >
            {ICON_2.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.PRIMARY}
            color={ICON_2.color}
            size={ICON_2.size}
          >
            {ICON_2.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.OUTLINE}
            color={ICON_2.color}
            size={ICON_2.size}
          >
            {ICON_2.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.TEXT}
            color={ICON_2.color}
            size={ICON_2.size}
          >
            {ICON_2.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.LINK}
            color={ICON_2.color}
            size={ICON_2.size}
          >
            {ICON_2.icon}
          </Button>
        </Container>
        <Container>
          <Button
            {...args}
            kind={ButtonKind.DEFAULT}
            color={ICON_3.color}
            size={ICON_3.size}
          >
            {ICON_3.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.OUTLINE}
            color={ICON_3.color}
            size={ICON_3.size}
          >
            {ICON_3.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.TEXT}
            color={ICON_3.color}
            size={ICON_3.size}
          >
            {ICON_3.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.LINK}
            color={ICON_3.color}
            size={ICON_3.size}
          >
            {ICON_3.icon}
          </Button>
        </Container>
        <Container>
          <Button
            {...args}
            kind={ButtonKind.DEFAULT}
            color={ICON_4.color}
            size={ICON_4.size}
            shape={ICON_4.shape}
          >
            {ICON_4.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.PRIMARY}
            color={ICON_4.color}
            size={ICON_4.size}
            shape={ICON_4.shape}
          >
            {ICON_4.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.OUTLINE}
            color={ICON_4.color}
            size={ICON_4.size}
            shape={ICON_4.shape}
          >
            {ICON_4.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.TEXT}
            color={ICON_4.color}
            size={ICON_4.size}
            shape={ICON_4.shape}
          >
            {ICON_4.icon}
          </Button>
          <Button
            {...args}
            kind={ButtonKind.LINK}
            color={ICON_4.color}
            size={ICON_4.size}
            shape={ICON_4.shape}
          >
            {ICON_4.icon}
          </Button>
        </Container>
      </Container>
    );
  },
};

export const DarkBackground: Story = {
  args: {
    children: "DarkBackground",
    color: "#ea80fc",
  },
  parameters: {
    backgrounds: {
      default: "grey-100",
    },
  },
  render: (args) => (
    <Container>
      <Button {...args} kind={ButtonKind.DEFAULT}>
        Default
      </Button>
      <Button {...args} kind={ButtonKind.PRIMARY}>
        Primary
      </Button>
      <Button {...args} kind={ButtonKind.OUTLINE}>
        Outline
      </Button>
      <Button {...args} kind={ButtonKind.TEXT}>
        Text
      </Button>
      <Button {...args} kind={ButtonKind.LINK}>
        Link
      </Button>
    </Container>
  ),
};
