import { type ReactNode, type InputHTMLAttributes } from "react";

export type InputProps = {
  /** Style of the input. */
  kind?: InputKindValues;
  /** Size of the input. */
  size?: InputSizeValues;
  /** Reduced padding for inputs in tight spaces. */
  compact?: boolean;
  borderWidth?: string;
  borderRadius?: string;
  /** Whether input has an error. Sets input color to red. */
  error?: boolean;
  /** Sets input color to green. */
  success?: boolean;
  /** Adds icon on the left side of input */
  icon?: ReactNode;
  /** Right section of input, similar to icon but on the right */
  rightSection?: ReactNode;
  /** Show a button to clear the input value */
  clearable?: boolean;
  clearedValue?: string;
  onClear?: () => void;
  onChange?: (value: string) => void;
  type?: "text" | "password" | "email" | "search" | "tel" | "url";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "type">;

export enum InputKind {
  DEFAULT = "default",
  FILLED = "filled",
  UNSTYLED = "unstyled",
}
type InputKindValues = `${InputKind}`;

export enum InputSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
  X_LARGE = "x-large",
}
type InputSizeValues = `${InputSize}`;
