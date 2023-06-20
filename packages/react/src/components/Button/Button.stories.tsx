import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  ButtonSize,
  ButtonKind,
  ButtonShape,
  type ButtonProps,
} from "./Button.types";
import { Stack } from "../Stack";
import { ThemeProvider } from "../../context";
import { MdFavorite, MdEmail } from "react-icons/md";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Inputs/Button",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    color: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Container = ({
  children,
  direction = "horizontal",
}: {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}) => (
  <Stack direction={direction} spacing={4}>
    {children}
  </Stack>
);

const MultipleButton = ({ ...args }: ButtonProps) => (
  <Container>
    <Button kind={ButtonKind.DEFAULT} children="Default" {...args} />
    <Button kind={ButtonKind.OUTLINE} children="Outline" {...args} />
    <Button kind={ButtonKind.LIGHT} children="Light" {...args} />
    <Button kind={ButtonKind.FILL} children="Fill" {...args} />
    <Button kind={ButtonKind.WHITE} children="White" {...args} />
    <Button kind={ButtonKind.SUBTLE} children="Subtle" {...args} />
    <Button kind={ButtonKind.LINK} children="Link" {...args} />
  </Container>
);

export const Default: Story = {
  args: {
    children: "Default",
  },
};

// Sizes and Spacing
export const SizeSmall: Story = {
  args: {
    size: ButtonSize.SMALL,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const SizeDefault: Story = {
  args: {
    size: ButtonSize.DEFAULT,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const SizeLarge: Story = {
  args: {
    size: ButtonSize.LARGE,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const SizeXLarge: Story = {
  args: {
    size: ButtonSize.X_LARGE,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const WithIcon: Story = {
  args: {
    leftIcon: <MdFavorite />,
  },
  render: (args) => (
    <Container direction="vertical">
      <MultipleButton {...args} size="small" />
      <MultipleButton {...args} size="default" />
      <MultipleButton {...args} size="large" />
      <MultipleButton {...args} size="x-large" />
    </Container>
  ),
};

export const Compact: Story = {
  args: {
    compact: true,
  },
  render: (args) => (
    <Container direction="vertical">
      <MultipleButton {...args} size="small" />
      <MultipleButton {...args} size="default" />
      <MultipleButton {...args} size="large" />
      <MultipleButton {...args} size="x-large" />
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

// Shapes
export const Sharp: Story = {
  args: {
    shape: ButtonShape.SHARP,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const Round: Story = {
  args: {
    shape: ButtonShape.ROUND,
  },
  render: (args) => (
    <Container direction="vertical">
      <MultipleButton {...args} />
      <MultipleButton {...args} leftIcon={<MdEmail />} />
    </Container>
  ),
};

// Others
export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const Color: Story = {
  args: {},
  render: (args) => {
    const COLOR_1 = "#EC4A0A";
    const COLOR_2 = "#5341ae";
    const COLOR_3 = "#047481";
    return (
      <Container direction="vertical">
        <MultipleButton {...args} color={COLOR_1} />
        <MultipleButton {...args} color={COLOR_2} />
        <MultipleButton {...args} color={COLOR_3} />
      </Container>
    );
  },
};

export const LeftIcon: Story = {
  args: {
    children: "No Entry",
    leftIcon: "⛔️",
    kind: ButtonKind.OUTLINE,
    color: "#f13422",
  },
};

export const RightIcon: Story = {
  args: {
    children: "Next Step",
    rightIcon: "➡️",
  },
};

export const BorderWidth: Story = {
  args: {
    children: "Border Width",
    kind: ButtonKind.OUTLINE,
    borderWidth: "1px",
  },
};

export const BorderRadius: Story = {
  args: {
    children: "Border Radius",
    kind: ButtonKind.OUTLINE,
    borderRadius: "12px",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    kind: ButtonKind.FILL,
    fullWidth: true,
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
      <Button {...args} size={ButtonSize.X_LARGE}>
        X-Large
      </Button>
    </Container>
  ),
};

export const Danger: Story = {
  args: {
    children: "Delete",
    danger: true,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const Success: Story = {
  args: {
    children: "Finish",
    success: true,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const Uppercase: Story = {
  args: {
    children: "Upper",
    uppercase: true,
  },
  render: (args) => <MultipleButton {...args} />,
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
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
      <Container direction="vertical">
        <MultipleButton
          {...args}
          color={ICON_1.color}
          size={ICON_1.size}
          children={ICON_1.icon}
        />
        <MultipleButton
          {...args}
          color={ICON_2.color}
          size={ICON_2.size}
          children={ICON_2.icon}
        />
        <MultipleButton
          {...args}
          color={ICON_3.color}
          size={ICON_3.size}
          children={ICON_3.icon}
        />
        <MultipleButton
          {...args}
          color={ICON_4.color}
          size={ICON_4.size}
          shape={ICON_4.shape}
          children={ICON_4.icon}
        />
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
    <ThemeProvider value={{ colorMode: "dark" }}>
      <MultipleButton {...args} />
    </ThemeProvider>
  ),
};
