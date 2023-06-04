import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSizeValues;
  kind?: ButtonKindValues;
  shape?: ButtonShapeValues;
  color?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  borderWidth?: string;
  isLoading?: boolean;
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
  TEXT = "text",
  LINK = "link",
}
type ButtonKindValues = `${ButtonKind}`;

export enum ButtonShape {
  DEFAULT = "default",
  SHARP = "sharp",
  ROUND = "round",
  CIRCLE = "circle",
}
type ButtonShapeValues = `${ButtonShape}`;
