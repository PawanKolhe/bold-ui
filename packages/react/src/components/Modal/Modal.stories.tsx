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

const Children = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Stack direction="vertical" spacing={4} alignItems="flex-start">
      <Input />
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

export const Default: Story = {
  args: {
    title: "Example Title",
    children: "Content",
  },
  render: ModalExample,
};

export const Nested: Story = {
  args: {
    title: "Example Title",
    children: <Children />,
  },
  render: ModalExample,
};

export const NoTitle: Story = {
  args: {
    children: "Content",
  },
  render: ModalExample,
};

export const NoCloseButton: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    showCloseButton: false,
  },
  render: ModalExample,
};

export const Centered: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    centered: true,
  },
  render: ModalExample,
};

export const NoCloseOnEscape: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    closeOnEsc: false,
  },
  render: ModalExample,
};

export const NoCloseOnClickOutside: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    closeOnClickOutside: false,
  },
  render: ModalExample,
};

export const NoOverlay: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    showBackdrop: false,
  },
  render: ModalExample,
};

export const Fullscreen: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    fullScreen: true,
  },
  render: ModalExample,
};

export const NoTransition: Story = {
  args: {
    title: "Example Title",
    children: "Content",
    transitionDuration: 0,
  },
  render: ModalExample,
};
