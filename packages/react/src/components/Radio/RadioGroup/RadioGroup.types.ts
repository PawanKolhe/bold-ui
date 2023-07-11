import { type ReactNode, type HTMLAttributes } from "react";
import { type RadioSizeValues, type RadioValueType } from "../Radio.types";

export type RadioGroupProps = {
  children?: ReactNode;
  name?: string;
  value?: RadioValueType;
  defaultValue?: RadioValueType;
  onChange?: (value: RadioValueType) => void;
  options?: RadioValueType[] | RadioOption[];
  direction?: RadioDirectionValues;
  size?: RadioSizeValues;
  /**
   * Spacing between children nodes.
   * - If a number is provided, it will be multiplied by the base spacing unit (4px).
   * - A string value can be any valid CSS length value, e.g. `20px`.
   */
  spacing?: string | number;
  disabled?: boolean;
  error?: boolean;
} & Omit<
  HTMLAttributes<HTMLDivElement>,
  "defaultChecked" | "defaultValue" | "onChange"
>;

export enum RadioDirection {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}
type RadioDirectionValues = `${RadioDirection}`;

export type RadioOption = {
  label: string;
  description?: string;
  value: RadioValueType;
  disabled?: boolean;
};

export type RadioGroupContextType = {
  name?: RadioGroupProps["name"];
  value?: RadioGroupProps["value"];
  onChange?: (value: RadioValueType) => void;
  size?: RadioGroupProps["size"];
};
