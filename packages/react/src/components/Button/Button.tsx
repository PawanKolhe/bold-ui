import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import {
  ButtonSize,
  type ButtonProps,
  ButtonKind,
  ButtonShape,
} from "./Button.types";
import styles from "./Button.module.scss";
import { useTheme } from "../../context/ThemeContext";

/**
 * Button component is used to trigger an action or event, such as submitting
 * a form, opening a Dialog, canceling an action, or performing a delete operation.
 */
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
          classPrefix("Button"),
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
          ...loadStyles({
            "--boldui-color-primary": computedColor,
            "--button-border-width": borderWidth,
            "--button-border-radius": borderRadius,
          }),
          ...style,
        }}
        type={type}
        ref={ref}
        {...restProps}
      >
        <div
          className={clsx(
            classPrefix("Button-overlay"),
            styles.Button__overlay
          )}
        />
        <div
          className={clsx(
            classPrefix("Button-spinner"),
            styles.Button__spinner
          )}
        />
        <div
          className={clsx(
            classPrefix("Button-content-container"),
            styles.Button__contentContainer
          )}
        >
          {leftIcon && (
            <span
              className={clsx(
                classPrefix("Button-icon-left"),
                styles.Button__icon
              )}
            >
              {leftIcon}
            </span>
          )}
          <span
            className={clsx(classPrefix("Button-text"), styles.Button__text)}
          >
            {children}
          </span>
          {rightIcon && (
            <span
              className={clsx(
                classPrefix("Button-icon-right"),
                styles.Button__icon
              )}
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
