import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type StackProps = {
  children?: ReactNode;
  gap?: string;
  direction?: StackDirectionValues;
  alignItems?: StackAlignItemsValues;
  justifyContent?: StackJustifyContentValues;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLDivElement>;

export enum StackDirection {
  ROW = "row",
  ROW_REVERSE = "row-reverse",
  COLUMN = "column",
  COLUMN_REVERSE = "column-reverse",
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
