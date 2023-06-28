import { forwardRef } from "react";
import { type GridItemProps } from "./GridItem.types";
import clsx from "clsx";
import { classPrefix } from "../../../utils/styles.utils";
import styles from "./GridItem.module.scss";

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
