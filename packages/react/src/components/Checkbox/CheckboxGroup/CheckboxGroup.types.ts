import { type ReactNode, type HTMLAttributes } from "react";
import {
  type CheckboxSizeValues,
  type CheckboxValueType,
} from "../Checkbox.types";

export type CheckboxGroupProps = {
  children?: ReactNode;
  name?: string;
  value?: CheckboxValueType[];
  defaultValue?: CheckboxValueType[];
  onChange?: (value: CheckboxValueType[]) => void;
  options?: CheckboxValueType[] | CheckboxOption[];
  direction?: CheckboxDirectionValues;
  size?: CheckboxSizeValues;
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

export enum CheckboxDirection {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}
type CheckboxDirectionValues = `${CheckboxDirection}`;

export type CheckboxOption = {
  label: string;
  description?: string;
  value: CheckboxValueType;
  disabled?: boolean;
};

export type CheckboxGroupContextType = {
  name?: CheckboxGroupProps["name"];
  value?: CheckboxGroupProps["value"];
  defaultValue?: CheckboxGroupProps["defaultValue"];
  onChange?: (value: CheckboxValueType, checked: boolean) => void;
  size?: CheckboxGroupProps["size"];
};
