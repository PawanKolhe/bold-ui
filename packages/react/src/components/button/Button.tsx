import { forwardRef, useMemo } from "react";
import { clsx } from "clsx";
import {
  ButtonSize,
  type ButtonProps,
  ButtonKind,
  ButtonShape,
} from "./Button.types";
import styles from "./Button.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      style = {},
      kind = ButtonKind.DEFAULT,
      size = ButtonSize.DEFAULT,
      shape = ButtonShape.DEFAULT,
      color = "var(--color-grey-100)",
      leftIcon,
      rightIcon,
      borderWidth,
      iconOnly = false,
      fullWidth = false,
      noSpacing = false,
      hasDepth = false,
      loading = false,
      danger = false,
      success = false,
      type = "button",
      ...restProps
    } = props;

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
            // Kind
            [styles.Button__kindDefault]: kind === ButtonKind.DEFAULT,
            [styles.Button__kindPrimary]: kind === ButtonKind.PRIMARY,
            [styles.Button__kindOutline]: kind === ButtonKind.OUTLINE,
            [styles.Button__kindText]: kind === ButtonKind.TEXT,
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
          },
          className
        )}
        style={{
          ["--button-primary-color" as string]: computedColor,
          ...(borderWidth
            ? { ["--button-border-width" as string]: borderWidth }
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
