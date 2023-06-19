import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { computeSpacing } from "../../utils/layout.utils";
import {
  GridDirection,
  type GridItemProps,
  type GridProps,
} from "./Grid.types";
import styles from "./Grid.module.scss";

/**
 * Grid is a layout component that allows you to create
 * a grid of items with fluid width columns that break into more or
 * less columns as space is available.
 */
const GridComponent = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      style = {},
      direction = "row",
      spacing = 0,
      columns,
      rows,
      itemWidth,
      itemHeight,
      itemMinWidth,
      itemMaxWidth,
      auto = true,
      dense = false,
      inline,
      ...restProps
    },
    ref
  ) => {
    const computedDirection = useMemo(() => {
      if (direction === GridDirection.HORIZONTAL) {
        return `row${dense ? " dense" : ""}`;
      } else if (direction === GridDirection.VERTICAL) {
        return `column${dense ? " dense" : ""}`;
      } else {
        return direction;
      }
    }, [dense, direction]);

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
          },
          className
        )}
        style={{
          ["--grid-direction" as string]: computedDirection,
          ["--grid-spacing" as string]: computeSpacing(spacing),
          ...loadStyles({
            "--grid-columns": columns,
            "--grid-rows": rows,
            "--grid-item-width": itemWidth,
            "--grid-item-height": itemHeight,
            "--grid-min-width": itemMinWidth,
            "--grid-max-width": itemMaxWidth,
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

GridComponent.displayName = "Grid";

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    { children, className, style = {}, spanColumns, spanRows, ...restProps },
    ref
  ) => {
    return (
      <div
        className={clsx(
          classPrefix("GridItem"),
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

export const Grid = GridComponent as typeof GridComponent & {
  Item: typeof GridItem;
};
Grid.Item = GridItem;
GridItem.displayName = "GridItem";
