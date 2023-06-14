import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { cx } from "../../utils/styles.utils";
import { type StackProps } from "./Stack.types";
import styles from "./Stack.module.scss";

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      style = {},
      spacing = 0,
      direction = "row",
      alignItems = "stretch",
      justifyContent = "flex-start",
      wrap = "nowrap",
      fullWidth,
      width,
      ...restProps
    },
    ref
  ) => {
    const computedSpacing = useMemo(() => {
      if (typeof spacing === "number") {
        return `calc(${spacing} * var(--stack-base-spacing-unit))`;
      }
      return spacing;
    }, [spacing]);

    return (
      <div
        className={clsx(
          cx("stack"),
          styles.Stack,
          {
            [styles.Stack__fullWidth]: fullWidth,
          },
          className
        )}
        style={{
          ["--stack-direction" as string]: direction,
          ["--stack-align-items" as string]: alignItems,
          ["--stack-justify-content" as string]: justifyContent,
          ["--stack-spacing" as string]: computedSpacing,
          ["--stack-wrap" as string]: wrap,
          ["--stack-width" as string]: width,
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

Stack.displayName = "Stack";
