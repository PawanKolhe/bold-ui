import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { type DrawerProps } from "./Drawer.types";
import { useModalContext } from "../Modal/Modal.context";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Stack } from "../Stack/Stack";
import { type ButtonProps } from "../Button/Button.types";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Overlays/Drawer",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<DrawerProps>;

const DrawerExample = (args: DrawerProps & { buttonProps?: ButtonProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        kind="fill"
        onClick={() => {
          setIsOpen(true);
        }}
        {...args.buttonProps}
      >
        {args.buttonProps?.children ?? "Open"}
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {args.children}
      </Drawer>
    </>
  );
};

const DrawerExampleRefFocus = (args: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  return (
    <>
      <Button
        kind="fill"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        initialFocusRef={buttonRef}
      >
        <Stack direction="vertical" spacing={4} alignItems="flex-start">
          Some sample test
          <Input />
          <Button kind="outline" ref={buttonRef}>
            Inital Focused Button
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

const Children = () => {
  return (
    <Stack direction="vertical" spacing={4}>
      <span>
        A drawer (also called a drawer window or lightbox) is a web page element
        that displays in front of and deactivates all other page content.
      </span>
      <span>
        To return to the main content, the user must engage with the drawer by
        completing an action or by closing it.
      </span>
    </Stack>
  );
};

const ChildrenNestedDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Stack direction="vertical" spacing={4} alignItems="flex-start">
      <Stack direction="vertical" spacing={2} alignItems="flex-start">
        <label
          htmlFor="input"
          style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            color: "var(--boldui-color-grey-900)",
          }}
        >
          Enter some text:
        </label>
        <Input id="input" />
      </Stack>
      <Button
        kind="fill"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Nested
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title="Nested Drawer"
      >
        Nested Drawer Content
      </Drawer>
    </Stack>
  );
};

const ChildrenLongContent = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates, quia voluptate quod quos dolorum
      voluptatem quae quidem quas. Quisquam voluptatum, quibusdam, voluptates,
      quia voluptate quod quos dolorum voluptatem quae quidem quas.
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index}>Item {index + 1}</p>
      ))}
    </div>
  );
};

const Footer = () => {
  const { onClose } = useModalContext();
  return (
    <Stack
      direction="horizontal"
      justifyContent="flex-end"
      spacing={3}
      fullWidth
    >
      <Button
        onClick={() => {
          onClose?.();
        }}
      >
        Cancel
      </Button>
      <Button kind="fill" danger>
        Delete
      </Button>
    </Stack>
  );
};

export const Default: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: DrawerExample,
};

export const Direction: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: (args) => (
    <Stack spacing={4}>
      <DrawerExample
        {...args}
        position="right"
        buttonProps={{
          children: "Right",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="left"
        buttonProps={{
          children: "Left",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="top"
        buttonProps={{
          children: "Top",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="bottom"
        buttonProps={{
          children: "Bottom",
          kind: "outline",
        }}
      />
    </Stack>
  ),
};

export const Nested: Story = {
  args: {
    title: "Example Title",
    children: <ChildrenNestedDrawer />,
  },
  render: DrawerExample,
};

export const Width: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    size: "600px",
  },
  render: (args) => (
    <Stack spacing={4}>
      <DrawerExample
        {...args}
        position="right"
        buttonProps={{
          children: "Right",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="left"
        buttonProps={{
          children: "Left",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="top"
        buttonProps={{
          children: "Top",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="bottom"
        buttonProps={{
          children: "Bottom",
          kind: "outline",
        }}
      />
    </Stack>
  ),
};

export const LongContent: Story = {
  args: {
    title: "Example Title",
    children: <ChildrenLongContent />,
    footer: <Footer />,
  },
  render: (args) => (
    <Stack spacing={4}>
      <DrawerExample
        {...args}
        position="right"
        buttonProps={{
          children: "Right",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="left"
        buttonProps={{
          children: "Left",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="top"
        buttonProps={{
          children: "Top",
          kind: "outline",
        }}
      />
      <DrawerExample
        {...args}
        position="bottom"
        buttonProps={{
          children: "Bottom",
          kind: "outline",
        }}
      />
    </Stack>
  ),
};

export const WithFooter: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    footer: <Footer />,
  },
  render: DrawerExample,
};

export const NoTitle: Story = {
  args: {
    children: <Children />,
  },
  render: DrawerExample,
};

export const NoCloseButton: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    showCloseButton: false,
  },
  render: DrawerExample,
};

export const NoCloseOnEscape: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    closeOnEsc: false,
  },
  render: DrawerExample,
};

export const NoCloseOnClickOutside: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    closeOnClickOutside: false,
  },
  render: DrawerExample,
};

export const NoBackdrop: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    showBackdrop: false,
  },
  render: DrawerExample,
};

export const NoTransition: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    transitionDuration: 0,
  },
  render: DrawerExample,
};

export const InitialFocusRef: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: DrawerExampleRefFocus,
};
