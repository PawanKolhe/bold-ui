import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { type ModalProps } from "./Modal.types";
import { Input } from "../Input/Input";
import { Stack } from "../Stack/Stack";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Overlays/Modal",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

const ModalExample = (args: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
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
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {args.children}
      </Modal>
    </>
  );
};

const ModalExampleRefFocus = (args: ModalProps) => {
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
      <Modal
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
      </Modal>
    </>
  );
};

const Children = () => {
  return (
    <Stack direction="vertical" spacing={4}>
      <span>
        A modal (also called a modal window or lightbox) is a web page element
        that displays in front of and deactivates all other page content.
      </span>
      <span>
        To return to the main content, the user must engage with the modal by
        completing an action or by closing it.
      </span>
    </Stack>
  );
};

const ChildrenNestedModal = () => {
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
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title="Nested Modal"
      >
        Nested Modal Content
      </Modal>
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

const footer: ModalProps["footer"] = ({ onClose }) => (
  <Stack direction="horizontal-reverse" spacing={3} fullWidth>
    <Button kind="fill" danger>
      Delete
    </Button>
    <Button
      onClick={() => {
        onClose();
      }}
    >
      Cancel
    </Button>
  </Stack>
);

export const Default: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: ModalExample,
};

export const Nested: Story = {
  args: {
    title: "Example Title",
    children: <ChildrenNestedModal />,
  },
  render: ModalExample,
};

export const Width: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    width: "900px",
  },
  render: ModalExample,
};

export const LongContent: Story = {
  args: {
    title: "Example Title",
    children: <ChildrenLongContent />,
    footer,
  },
  render: ModalExample,
};

export const LongContentScrollOutside: Story = {
  args: {
    title: "Example Title",
    children: <ChildrenLongContent />,
    footer,
    scrollBehavior: "outside",
  },
  render: ModalExample,
};

export const Centered: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    centered: true,
  },
  render: ModalExample,
};

export const Footer: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    footer,
  },
  render: ModalExample,
};

export const NoTitle: Story = {
  args: {
    children: <Children />,
  },
  render: ModalExample,
};

export const NoCloseButton: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    showCloseButton: false,
  },
  render: ModalExample,
};

export const NoCloseOnEscape: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    closeOnEsc: false,
  },
  render: ModalExample,
};

export const NoCloseOnClickOutside: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    closeOnClickOutside: false,
  },
  render: ModalExample,
};

export const NoOverlay: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    showBackdrop: false,
  },
  render: ModalExample,
};

export const Fullscreen: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    fullScreen: true,
  },
  render: ModalExample,
};

export const NoTransition: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
    transitionDuration: 0,
  },
  render: ModalExample,
};

export const InitialFocusRef: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: ModalExampleRefFocus,
};
