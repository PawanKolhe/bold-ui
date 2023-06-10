import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { cx, loadStyle } from "../../utils/styles.utils";
import { InputSize, type InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { useTheme } from "../../context/ThemeContext";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      style = {},
      size = "default",
      color,
      compact = false,
      borderWidth,
      borderRadius,
      error,
      success,
      icon,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();

    const computedColor = useMemo(() => {
      if (error) {
        return "var(--boldui-color-error)";
      } else if (success) {
        return "var(--boldui-color-success)";
      } else {
        return color;
      }
    }, [color, error, success]);

    return (
      <div
        className={clsx(
          cx("input-wrapper"),
          styles.Input__wrapper,
          {
            ...themeClasses,
            // Size
            [styles.Input__sizeDefault]: size === InputSize.DEFAULT,
            [styles.Input__sizeSmall]: size === InputSize.SMALL,
            [styles.Input__sizeLarge]: size === InputSize.LARGE,
            [styles.Input__sizeXLarge]: size === InputSize.X_LARGE,
            // Others
            [styles.Input__compact]: compact,
            [styles.Input__hasIcon]: !!icon,
            [styles.Input__error]: error,
            [styles.Input__success]: success,
          },
          className
        )}
      >
        {icon && (
          <div className={clsx(cx("input-icon"), styles.Input__icon)}>
            {icon}
          </div>
        )}
        <input
          className={clsx(cx("input"), styles.Input)}
          style={{
            ...themeStyles,
            ...loadStyle("--boldui-color-primary", computedColor),
            ...loadStyle("--button-border-width", borderWidth),
            ...loadStyle("--button-border-radius", borderRadius),
            ...style,
          }}
          ref={ref}
          {...restProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
