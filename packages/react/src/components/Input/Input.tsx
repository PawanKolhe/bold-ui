import { forwardRef } from "react";
import { clsx } from "clsx";
import { type InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ children, className, style = {}, ...restProps }, ref) => {
    return (
      <div
        className={clsx(styles.Input, {}, className)}
        style={{
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

Input.displayName = "Input";
