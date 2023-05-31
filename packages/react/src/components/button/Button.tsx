import { forwardRef } from "react";
import { clsx } from "clsx";
import { ButtonSize, type ButtonProps, ButtonKind } from "./Button.types";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      kind = ButtonKind.DEFAULT,
      size = ButtonSize.DEFAULT,
      color = "#1a1b22",
      hasDepth = false,
      hasNoSpacing = false,
      className,
      ...restProps
    } = props;

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
            [styles.Button__kindOutline]: kind === ButtonKind.OUTLINE,
            [styles.Button__kindPrimary]: kind === ButtonKind.PRIMARY,
            [styles.Button__kindSubtle]: kind === ButtonKind.SUBTLE,
            [styles.Button__kindLink]: kind === ButtonKind.LINK,
            // Others
            [styles.Button__hasNoSpacing]:
              hasNoSpacing && kind === ButtonKind.LINK,
            [styles.Button__hasDepth]: hasDepth && kind === ButtonKind.OUTLINE,
          },
          className
        )}
        style={{ ["--button-primary-color" as string]: color }}
        ref={ref}
        {...restProps}
      >
        <div className={styles.Button__overlay} />
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
