import { type HTMLAttributes, type ReactNode } from "react";

export type GridProps = {
  children?: ReactNode;
  /**
   * Spacing between children nodes.
   * - If a number is provided, it will be multiplied by the base spacing unit (4px).
   * - A string value can be any valid CSS length value, e.g. `20px`.
   */
  spacing?: string | number;
  itemMinWidth?: string;
  itemMaxWidth?: string;
  /** Whether Grid container should occupy available width */
  fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;
