import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
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
      wrap,
      fullWidth,
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
