import { forwardRef } from "react";
import { clsx } from "clsx";
import { type StackProps } from "./Stack.types";
import styles from "./Stack.module.scss";

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    children,
    className,
    style = {},
    direction = "row",
    fullWidth,
    ...restProps
  } = props;

  return (
    <div
      className={clsx(
        styles.Stack,
        {
          [styles.Button__fullWidth]: fullWidth,
        },
        className
      )}
      style={{
        ["--stack-direction" as string]: direction,
        ...style,
      }}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

Stack.displayName = "Stack";
