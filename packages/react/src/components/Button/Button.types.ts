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
  loading?: boolean;
  /**
   * Set to true if button only contains an icon.
   */
  iconOnly?: boolean;
  /**
   * Makes the button a full width button.
   */
  fullWidth?: boolean;
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
  danger?: boolean;
  /**
   * Sets button color to green.
   */
  success?: boolean;
  /**
   * Reduced padding for buttons in tight spaces.
   */
  compact?: boolean;
  /**
   * Sets button text to uppercase.
   */
  uppercase?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
  X_LARGE = "x-large",
}
type ButtonSizeValues = `${ButtonSize}`;

export enum ButtonKind {
  DEFAULT = "default",
  OUTLINE = "outline",
  LIGHT = "light",
  FILL = "fill",
  SUBTLE = "subtle",
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
