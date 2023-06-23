import { type HTMLAttributes, type ReactNode } from "react";
import { type ButtonProps } from "../Button/Button.types";
import { type FocusableElement } from "../../types/dom.types";

export type ModalProps = {
  /** Whether modal is opened */
  isOpen: boolean;
  /** Called when modal is closed */
  onClose: () => void;
  /** Modal content */
  children?: ReactNode;
  /** Modal title */
  title?: React.ReactNode;
  /** Width of modal */
  width?: string;
  /** Padding inside of modal */
  padding?: string;
  /** Whether the modal should be centered vertically, false by default */
  centered?: boolean;
  /** Whether the modal should take the entire screen */
  fullScreen?: boolean;
  /** Footer content which will be stuck to bottom of modal */
  footer?:
    | React.ReactNode
    | ((props: { onClose: ModalProps["onClose"] }) => React.ReactNode);
  /** Close modal on pressing 'Escape' on keyboard */
  closeOnEsc?: boolean;
  /** Close modal on clicking outside */
  closeOnClickOutside?: boolean;
  /** Called when modal backdrop is clicked */
  onBackdropClick?: () => void;
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
  /** Classname added to footer container */
  footerClassName?: string;
  /** Styles added to header */
  headerStyles?: React.CSSProperties;
  /** Styles added to body */
  bodyStyles?: React.CSSProperties;
  /** Styles added to footer */
  footerStyles?: React.CSSProperties;
  /** Transition duration of modal in milliseconds, 200 by default. Set to 0 to turn off transition. */
  transitionDuration?: number;
  /** `z-index` of modal */
  zIndex?: number;
  /** When content is long, whether to scroll body of modal or entire modal  */
  scrollBehavior?: ModalScrollBehaviorValues;
  /** Whether to block scrolling on mount */
  lockScroll?: boolean;
  /**
   * Whether to add a `padding-right` to the body element that's equal to the width of the scrollbar.
   * This can help prevent some unpleasant flickering effect and content adjustment when the modal opens.
   **/
  preserveScrollBarGap?: boolean;
  /** Whether first interactive element should be autofocused within modal */
  autoFocus?: boolean;
  /** Whether to lock the focus within modal */
  trapFocus?: boolean;
  /** Whether the modal will return focus to the element that triggered it when it closes. */
  returnFocus?: boolean;
  /** Target element where Portal should be rendered, by default new element is created and appended to the document.body */
  target?: HTMLElement;
  /** The ref of element to receive focus when the modal opens */
  initialFocusRef?: React.RefObject<FocusableElement>;
  /** The ref of element to receive focus when the modal closes */
  finalFocusRef?: React.RefObject<FocusableElement>;
} & HTMLAttributes<HTMLDivElement>;

export enum ModalScrollBehavior {
  INSIDE = "inside",
  OUTSIDE = "outside",
}
type ModalScrollBehaviorValues = `${ModalScrollBehavior}`;

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

export type ModalFooterProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ModalCloseButtonProps = {
  onClose: ModalProps["onClose"];
  closeButtonProps?: ModalProps["closeButtonProps"];
} & HTMLAttributes<HTMLDivElement>;
