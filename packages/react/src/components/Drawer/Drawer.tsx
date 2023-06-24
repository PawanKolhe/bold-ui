import { forwardRef } from "react";
import { clsx } from "clsx";
import { Modal } from "../Modal";
import { type DrawerProps } from "./Drawer.types";
import styles from "./Drawer.module.scss";

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      position = "right",
      className,
      innerClassName,
      contentClassName,
      headerClassName,
      bodyClassName,
      ...restProps
    },
    ref
  ) => {
    return (
      <Modal
        className={clsx(className, styles.Drawer, {
          [styles.Drawer__positionLeft]: position === "left",
          [styles.Drawer__positionRight]: position === "right",
          [styles.Drawer__positionTop]: position === "top",
          [styles.Drawer__positionBottom]: position === "bottom",
        })}
        innerClassName={clsx(innerClassName, styles.Drawer__inner)}
        contentClassName={clsx(contentClassName, styles.Drawer__content)}
        headerClassName={clsx(headerClassName, styles.Drawer__header)}
        bodyClassName={clsx(bodyClassName, styles.Drawer__body)}
        {...restProps}
        ref={ref}
      />
    );
  }
);

Drawer.displayName = "Drawer";
