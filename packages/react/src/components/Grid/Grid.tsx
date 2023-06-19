import { forwardRef } from "react";
import { clsx } from "clsx";
import { cx } from "../../utils/styles.utils";
import { computeSpacing } from "../../utils/layout.utils";
import { type GridProps } from "./Grid.types";
import styles from "./Grid.module.scss";

/**
 * Grid is a layout component that allows you to create
 * a grid of items with fluid width columns that break into more or
 * less columns as space is available.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      style = {},
      spacing = 0,
      itemMinWidth,
      itemMaxWidth,
      fullWidth,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          cx("Grid"),
          styles.Grid,
          {
            [styles.Grid__fullWidth]: fullWidth,
          },
          className
        )}
        style={{
          ["--grid-spacing" as string]: computeSpacing(spacing),
          ["--grid-min-width" as string]: itemMinWidth,
          ["--grid-max-width" as string]: itemMaxWidth,
          ...style,
        }}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
