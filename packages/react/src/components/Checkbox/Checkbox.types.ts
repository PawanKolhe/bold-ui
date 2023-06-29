import {
  type ReactNode,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react";

export type CheckboxProps = {
  value?: CheckboxValueType;
  label?: ReactNode;
  description?: string;
  size?: CheckboxSizeValues;
  indeterminate?: boolean;
  icon?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  error?: boolean;
  onChange?: (checked: boolean) => void;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange" | "type" | "value"
>;

export type CheckboxValueType = string | number;

export enum CheckboxSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
}
export type CheckboxSizeValues = `${CheckboxSize}`;
