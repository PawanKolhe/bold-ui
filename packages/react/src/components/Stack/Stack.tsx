import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { computeSpacing } from "../../utils/layout.utils";
import { StackDirection, type StackProps } from "./Stack.types";
import styles from "./Stack.module.scss";

/** Stack is a layout component used to group elements together and apply a space between them */
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
      inline,
      ...restProps
    },
    ref
  ) => {
    const computedDirection = useMemo(() => {
      if (direction === StackDirection.HORIZONTAL) {
        return "row";
      } else if (direction === StackDirection.HORIZONTAL_REVERSE) {
        return "row-reverse";
      } else if (direction === StackDirection.VERTICAL) {
        return "column";
      } else if (direction === StackDirection.VERTICAL_REVERSE) {
        return "column-reverse";
      } else {
        return direction;
      }
    }, [direction]);

    return (
      <div
        className={clsx(
          classPrefix("Stack"),
          styles.Stack,
          {
            [styles.Stack__fullWidth]: fullWidth,
            [styles.Stack__inline]: inline,
          },
          className
        )}
        style={{
          ["--stack-direction" as string]: computedDirection,
          ["--stack-align-items" as string]: alignItems,
          ["--stack-justify-content" as string]: justifyContent,
          ["--stack-spacing" as string]: computeSpacing(spacing),
          ["--stack-wrap" as string]: wrap,
          ...loadStyles({ "--stack-width": width }),
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
