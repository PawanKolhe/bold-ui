import { type ButtonHTMLAttributes, type ReactNode } from "react";

export enum ButtonSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
}
type ButtonSizeValues = `${ButtonSize}`;

export enum ButtonKind {
  DEFAULT = "default",
  OUTLINE = "outlne",
  PRIMARY = "primary",
  SUBTLE = "subtle",
  LINK = "link",
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
  noSpacing?: boolean;
  /**
   * Adds a 2D depth effect to the button.
   * Supported only for 'ButtonKind.OUTLINE' button kind
   */
  hasDepth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
