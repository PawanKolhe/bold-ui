import { forwardRef } from "react";
import { clsx } from "clsx";
import { type ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, hasDepth, ...restProps } = props;
    return (
      <button
        className={clsx(styles.Button, {
          [styles.Button__hasDepth]: hasDepth,
        })}
        ref={ref}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
