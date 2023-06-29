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
  disabled?: boolean;
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
