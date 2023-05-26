import { forwardRef } from "react";
import { type ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...restProps } = props;
    return (
      <button className={styles.Button} ref={ref} {...restProps}>
        {children}
      </button>
    );
  }
);
