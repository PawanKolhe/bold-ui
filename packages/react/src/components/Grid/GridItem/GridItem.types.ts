import { type HTMLAttributes, type ReactNode } from "react";

export type GridItemProps = {
  children?: ReactNode;
  /** Expand Item to specific number to columns */
  spanColumns?: number;
  /** Expand Item to specific number to rows */
  spanRows?: number;
} & HTMLAttributes<HTMLDivElement>;
