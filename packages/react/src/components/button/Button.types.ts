import { type ButtonHTMLAttributes, type ReactNode } from "react";

export enum ButtonSize {
  SMALL = "SMALL",
  DEFAULT = "DEFAULT",
  LARGE = "LARGE",
}
type ButtonSizeValues = `${ButtonSize}`;

export enum ButtonKind {
  DEFAULT = "DEFAULT",
  OUTLINE = "OUTLINE",
  PRIMARY = "PRIMARY",
  SUBTLE = "SUBTLE",
  LINK = "LINK",
}
type ButtonKindValues = `${ButtonKind}`;

export type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSizeValues;
  kind?: ButtonKindValues;
  color?: string;
  hasFullWidth?: boolean;
  /**
   * Removes the padding inside the button.
   * Supported only for 'ButtonKind.LINK' button kind
   */
  hasNoSpacing?: boolean;
  /**
   * Adds a 2D depth effect to the button.
   * Supported only for 'ButtonKind.OUTLINE' button kind
   */
  hasDepth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
