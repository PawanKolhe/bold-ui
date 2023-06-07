import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import {
  ButtonSize,
  type ButtonProps,
  ButtonKind,
  ButtonShape,
} from "./Button.types";
import styles from "./Button.module.scss";
// import { useTheme } from "../../context";

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
      color = "var(--color-grey-100)",
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
    // const { theme } = useTheme();

    const computedColor: string = useMemo(() => {
      if (danger) {
        return "var(--color-danger)";
      } else if (success) {
        return "var(--color-success)";
      } else {
        return color;
      }
    }, [color, danger, success]);

    return (
      <button
        className={clsx(
          styles.Button,
          {
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
          ["--button-primary-color" as string]: computedColor,
          ...(borderWidth
            ? { ["--button-border-width" as string]: borderWidth }
            : {}),
          ...(borderRadius
            ? { ["--button-border-radius" as string]: borderRadius }
            : {}),
          ...style,
        }}
        type={type}
        ref={ref}
        {...restProps}
      >
        <div className={styles.Button__overlay} />
        <div className={styles.Button__spinner} />
        <div className={styles.Button__contentContainer}>
          {leftIcon && <span className={styles.Button__icon}>{leftIcon}</span>}
          <span className={styles.Button__text}>{children}</span>
          {rightIcon && (
            <span className={styles.Button__icon}>{rightIcon}</span>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
