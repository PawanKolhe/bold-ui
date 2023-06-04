import { forwardRef } from "react";
import { clsx } from "clsx";
import { type StackProps } from "./Stack.types";
import styles from "./Stack.module.scss";

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      className={clsx(
        styles.Stack,
        {
          // Size
          // [styles.Button__sizeDefault]: size === ButtonSize.DEFAULT,
        },
        className
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

Stack.displayName = "Stack";
