import {
  type ReactNode,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ChangeEvent,
} from "react";

export type RadioProps = {
  value?: RadioValueType;
  label?: ReactNode;
  size?: RadioSizeValues;
  icon?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange" | "type" | "value" | "defaultChecked"
>;

export type RadioValueType = string | number;

export enum RadioSize {
  DEFAULT = "default",
  SMALL = "small",
  LARGE = "large",
}
export type RadioSizeValues = `${RadioSize}`;
