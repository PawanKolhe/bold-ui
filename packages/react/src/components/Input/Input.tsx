import { forwardRef } from "react";
import { clsx } from "clsx";
import { cx } from "../../utils/styles.utils";
import { type InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { useTheme } from "../../context/ThemeContext";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, style = {}, ...restProps }, ref) => {
    const { themeStyles, themeClasses } = useTheme();

    return (
      <input
        className={clsx(
          cx("Input"),
          styles.Input,
          {
            ...themeClasses,
          },
          className
        )}
        style={{
          ...themeStyles,
          ...style,
        }}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Input.displayName = "Input";
