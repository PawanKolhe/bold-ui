import { type ReactNode, type InputHTMLAttributes } from "react";

export type InputProps = {
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
  icon?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export enum InputSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
  X_LARGE = "x-large",
}
type InputSizeValues = `${InputSize}`;
