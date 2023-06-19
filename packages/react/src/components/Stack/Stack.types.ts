import { type HTMLAttributes, type ReactNode } from "react";

export type StackProps = {
  children?: ReactNode;
  /** Direction of flow */
  direction?: StackDirectionValues;
  /**
   * Spacing between children nodes.
   * - If a number is provided, it will be multiplied by the base spacing unit (4px).
   * - A string value can be any valid CSS length value, e.g. `20px`.
   */
  spacing?: string | number;
  alignItems?: StackAlignItemsValues;
  justifyContent?: StackJustifyContentValues;
  wrap?: StackWrapValues;
  /** Whether Stack should occupy available width */
  fullWidth?: boolean;
  width?: string;
  inline?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export enum StackDirection {
  HORIZONTAL = "horizontal",
  HORIZONTAL_REVERSE = "horizontal-reverse",
  VERTICAL = "vertical",
  VERTICAL_REVERSE = "vertical-reverse",
}
type StackDirectionValues = `${StackDirection}`;

export enum StackAlignItems {
  FLEX_START = "flex-start",
  CENTER = "center",
  FLEX_END = "flex-end",
  STRETCH = "stretch",
  BASELINE = "baseline",
}
type StackAlignItemsValues = `${StackAlignItems}`;

export enum StackJustifyContent {
  FLEX_START = "flex-start",
  CENTER = "center",
  FLEX_END = "flex-end",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
}
type StackJustifyContentValues = `${StackJustifyContent}`;

export enum StackWrap {
  NOWRAP = "nowrap",
  WRAP = "wrap",
  WRAP_REVERSE = "wrap-reverse",
}
type StackWrapValues = `${StackWrap}`;
