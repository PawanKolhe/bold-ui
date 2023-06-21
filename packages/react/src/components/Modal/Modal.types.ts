import { type HTMLAttributes, type ReactNode } from "react";
import { type ButtonProps } from "../Button/Button.types";

export type ModalProps = {
  /** Whether modal is opened */
  isOpen: boolean;
  /** Called when modal is closed */
  onClose: () => void;
  /** Modal content */
  children?: ReactNode;
  /** Modal title */
  title?: React.ReactNode;
  /** Whether the modal should be centered vertically, false by default */
  centered?: boolean;
  /** Whether the modal should take the entire screen */
  fullScreen?: boolean;
  /** Close modal on pressing 'Escape' on keyboard */
  closeOnEsc?: boolean;
  /** Close modal on clicking outside */
  closeOnClickOutside?: boolean;
  /** Whether backdrop should be rendered, true by default */
  showBackdrop?: boolean;
  /** Whether close button should be rendered, true by default */
  showCloseButton?: boolean;
  /** Props added to close button */
  closeButtonProps?: ButtonProps;
  /** Classname added to overlay */
  backdropClassName?: string;
  /** Classname added to inner container */
  innerClassName?: string;
  /** Classname added to content container */
  contentClassName?: string;
  /** Classname added to header container */
  headerClassName?: string;
  /** Classname added to body container */
  bodyClassName?: string;
  /** Transition duration of modal in milliseconds, 200 by default. Set to 0 to turn off transition. */
  transitionDuration?: number;
  /** z-index of modal */
  zIndex?: number;
  /** Whether to block scrolling on mount */
  blockScrollOnMount?: boolean;
  /** Whether first interactive element should be autofocused within modal */
  autoFocus?: boolean;
  /** Whether to lock the focus within modal */
  trapFocus?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type ModalBackdropProps = HTMLAttributes<HTMLDivElement>;

export type ModalInnerProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ModalContentProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ModalHeaderProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ModalBodyProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ModalCloseButtonProps = {
  onClose: ModalProps["onClose"];
  closeButtonProps?: ModalProps["closeButtonProps"];
} & HTMLAttributes<HTMLDivElement>;
