import { type ButtonHTMLAttributes, type ReactNode } from "react";

export enum ButtonSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
}
type ButtonSizeValues = `${ButtonSize}`;

export enum ButtonKind {
  DEFAULT = "default",
  OUTLINE = "outline",
  PRIMARY = "primary",
  SUBTLE = "subtle",
  LINK = "link",
}
type ButtonKindValues = `${ButtonKind}`;

export enum ButtonShape {
  DEFAULT = "default",
  SHARP = "sharp",
  ROUNDED = "rounded",
  CIRCLE = "circle",
}
type ButtonShapeValues = `${ButtonShape}`;

export type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSizeValues;
  kind?: ButtonKindValues;
  shape?: ButtonShapeValues;
  color?: string;
  /**
   * Set to true if button only contains an icon.
   */
  isIconOnly?: boolean;
  /**
   * Makes the button a full width button.
   */
  isFullWidth?: boolean;
  /**
   * Removes the padding inside the button.
   * Supported kinds: 'ButtonKind.LINK'
   */
  noSpacing?: boolean;
  /**
   * Adds a 2D depth effect to the button.
   * Supported kinds: 'ButtonKind.OUTLINE'
   */
  hasDepth?: boolean;
  /**
   * Sets button color to red.
   */
  isDanger?: boolean;
  /**
   * Sets button color to green.
   */
  isSuccess?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
