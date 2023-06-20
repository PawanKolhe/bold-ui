import { type HTMLAttributes, type ReactNode } from "react";

export type GridProps = {
  children?: ReactNode;
  /**
   * Spacing between children nodes.
   * - If a number is provided, it will be multiplied by the base spacing unit (4px).
   * - A string value can be any valid CSS length value, e.g. `20px`.
   */
  spacing?: string | number;
  /** Number of columns in grid */
  columns?: number;
  /** Number of rows in grid */
  rows?: number;
  /** Minimum width of each item in the grid */
  itemMinWidth?: string;
  /**
   * Automatically determine column or rows according to space required by items and available space.
   * Passing rows or columns props will override this option.
   */
  auto?: boolean;
  /**
   * When true, "dense" packing algorithm is used to attempt to fill in holes earlier in the grid.
   * When false, "sparse" algorithm is used, where the placement algorithm only ever moves "forward"
   * in the grid when placing items, never backtracking to fill holes.
   */
  dense?: boolean;
  inline?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type GridItemProps = {
  children?: ReactNode;
  /** Expand Item to specific number to columns */
  spanColumns?: number;
  /** Expand Item to specific number to rows */
  spanRows?: number;
} & HTMLAttributes<HTMLDivElement>;
