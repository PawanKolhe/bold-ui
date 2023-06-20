import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { type ButtonProps } from "../Button/Button.types";

export type ModalProps = {
  /** Whether modal is opened */
  opened: boolean;
  /** Called when modal is closed */
  onClose: () => void;
  /** Modal content */
  children?: ReactNode;
  /** Modal title */
  title?: React.ReactNode;
  /** Whether overlay should be rendered, true by default */
  showOverlay?: boolean;
  /** Whether close button should be rendered, true by default */
  showCloseButton?: boolean;
  /** Props added to close button */
  closeButtonProps?: ButtonProps;
  /** Whether the modal should be centered vertically, false by default */
  centered?: boolean;
  /** Whether the modal should take the entire screen */
  fullScreen?: boolean;
  /** Close modal on pressing 'Escape' on keyboard */
  closeOnEscape?: boolean;
  /** Close modal on clicking outside */
  closeOnClickOutside?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type ModalOverlayProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export type ModalContentProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type ModalHeaderProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClose: () => void;
  showCloseButton?: boolean;
};

export type ModalBodyProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};
