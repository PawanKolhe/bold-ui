import { useMemo, forwardRef } from "react";
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
      kind = ButtonKind.DEFAULT,
      size = ButtonSize.DEFAULT,
      shape = ButtonShape.DEFAULT,
      color = "var(--color-grey-100)",
      isIconOnly = false,
      isFullWidth = false,
      noSpacing = false,
      hasDepth = false,
      isDanger = false,
      isSuccess = false,
      className,
      type = "button",
      ...restProps
    } = props;

    const computedColor: string = useMemo(() => {
      if (isDanger) {
        return "var(--color-danger)";
      } else if (isSuccess) {
        return "var(--color-success)";
      } else {
        return color;
      }
    }, [color, isDanger, isSuccess]);

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
            [styles.Button__isIconOnly]: isIconOnly,
            [styles.Button__isFullWidth]: isFullWidth,
            [styles.Button__noSpacing]: noSpacing && kind === ButtonKind.LINK,
            [styles.Button__hasDepth]: hasDepth && kind === ButtonKind.OUTLINE,
          },
          className
        )}
        style={{ ["--button-primary-color" as string]: computedColor }}
        type={type}
        ref={ref}
        {...restProps}
      >
        <div className={styles.Button__overlay} />
        <span className={styles.Button__text}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
