import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { type ModalProps } from "./Modal.types";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Overlays/Modal",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ModalProps>;

const ModalExample = (args: ModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button
        kind="fill"
        onClick={() => {
          setOpened(true);
        }}
      >
        Open
      </Button>
      <Modal
        {...args}
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      >
        {args.children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    title: "Example Title",
    children: "Content",
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

export const NoHeader: Story = {
  args: {
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
    closeOnEscape: false,
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
    showOverlay: false,
  },
  render: ModalExample,
};
