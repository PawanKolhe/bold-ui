import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { cx, loadStyle } from "../../utils/styles.utils";
import {
  ButtonSize,
  type ButtonProps,
  ButtonKind,
  ButtonShape,
} from "./Button.types";
import styles from "./Button.module.scss";
import { useTheme } from "../../context/ThemeContext";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style = {},
      type = "button",
      kind = "default",
      size = "default",
      shape = "default",
      color,
      leftIcon,
      rightIcon,
      borderWidth,
      borderRadius,
      iconOnly = false,
      fullWidth = false,
      noSpacing = false,
      hasDepth = false,
      loading = false,
      danger = false,
      success = false,
      compact = false,
      uppercase = false,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();

    const computedColor = useMemo(() => {
      if (danger) {
        return "var(--boldui-color-error)";
      } else if (success) {
        return "var(--boldui-color-success)";
      } else {
        return color;
      }
    }, [color, danger, success]);

    return (
      <button
        className={clsx(
          cx("button"),
          styles.Button,
          {
            ...themeClasses,
            // Size
            [styles.Button__sizeDefault]: size === ButtonSize.DEFAULT,
            [styles.Button__sizeSmall]: size === ButtonSize.SMALL,
            [styles.Button__sizeLarge]: size === ButtonSize.LARGE,
            [styles.Button__sizeXLarge]: size === ButtonSize.X_LARGE,
            // Kind
            [styles.Button__kindDefault]: kind === ButtonKind.DEFAULT,
            [styles.Button__kindOutline]: kind === ButtonKind.OUTLINE,
            [styles.Button__kindLight]: kind === ButtonKind.LIGHT,
            [styles.Button__kindFill]: kind === ButtonKind.FILL,
            [styles.Button__kindWhite]: kind === ButtonKind.WHITE,
            [styles.Button__kindSubtle]: kind === ButtonKind.SUBTLE,
            [styles.Button__kindLink]: kind === ButtonKind.LINK,
            // Shape
            [styles.Button__shapeDefault]: shape === ButtonShape.DEFAULT,
            [styles.Button__shapeSharp]: shape === ButtonShape.SHARP,
            [styles.Button__shapeRound]: shape === ButtonShape.ROUND,
            [styles.Button__shapeCircle]: shape === ButtonShape.CIRCLE,
            // Others
            [styles.Button__loading]: loading,
            [styles.Button__iconOnly]: iconOnly,
            [styles.Button__fullWidth]: fullWidth,
            [styles.Button__noSpacing]: noSpacing && kind === ButtonKind.LINK,
            [styles.Button__hasDepth]: hasDepth && kind === ButtonKind.OUTLINE,
            [styles.Button__compact]: compact,
            [styles.Button__uppercase]: uppercase,
          },
          className
        )}
        style={{
          ...themeStyles,
          ...loadStyle("--boldui-color-primary", computedColor),
          ...loadStyle("--button-border-width", borderWidth),
          ...loadStyle("--button-border-radius", borderRadius),
          ...style,
        }}
        type={type}
        ref={ref}
        {...restProps}
      >
        <div className={clsx(cx("button-overlay"), styles.Button__overlay)} />
        <div className={clsx(cx("button-spinner"), styles.Button__spinner)} />
        <div
          className={clsx(
            cx("button-content-container"),
            styles.Button__contentContainer
          )}
        >
          {leftIcon && (
            <span className={clsx(cx("button-icon-left"), styles.Button__icon)}>
              {leftIcon}
            </span>
          )}
          <span className={clsx(cx("button-text"), styles.Button__text)}>
            {children}
          </span>
          {rightIcon && (
            <span
              className={clsx(cx("button-icon-right"), styles.Button__icon)}
            >
              {rightIcon}
            </span>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
