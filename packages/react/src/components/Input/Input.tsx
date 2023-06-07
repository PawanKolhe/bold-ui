import { forwardRef } from "react";
import { clsx } from "clsx";
import { type InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, style = {}, ...restProps }, ref) => {
    return (
      <input
        className={clsx(styles.Input, {}, className)}
        style={{
          ...style,
        }}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Input.displayName = "Input";
