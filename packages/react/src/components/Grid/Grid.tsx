import { forwardRef } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { computeSpacing } from "../../utils/layout.utils";
import { type GridItemProps, type GridProps } from "./Grid.types";
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
      columns,
      rows,
      itemMinWidth,
      auto = true,
      dense = false,
      inline,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          classPrefix("Grid"),
          styles.Grid,
          {
            [styles.Grid__auto]: auto,
            [styles.Grid__inline]: inline,
            [styles.Grid__hasColumns]: columns,
            [styles.Grid__hasRows]: rows,
            [styles.Grid__dense]: dense,
          },
          className
        )}
        style={{
          ["--grid-spacing" as string]: computeSpacing(spacing),
          ...loadStyles({
            "--grid-columns": columns,
            "--grid-rows": rows,
            "--grid-min-width": itemMinWidth,
          }),
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

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    { children, className, style = {}, spanColumns, spanRows, ...restProps },
    ref
  ) => {
    return (
      <div
        className={clsx(
          classPrefix("Grid-item"),
          styles.GridItem,
          {},
          className
        )}
        style={{
          ["--grid-column-span" as string]: spanColumns,
          ["--grid-row-span" as string]: spanRows,
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

GridItem.displayName = "GridItem";
