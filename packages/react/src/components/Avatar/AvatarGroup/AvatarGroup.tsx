import { forwardRef } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../../utils/styles.utils";
import { type AvatarGroupProps } from "./AvatarGroup.types";
import styles from "./AvatarGroup.module.scss";
import { computeSpacing } from "../../../utils/layout.utils";

/** A wrapper to stack multiple Avatars together */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, style = {}, spacing = 0, ...restProps }, ref) => {
    return (
      <div
        className={clsx(
          classPrefix("AvatarGroup"),
          styles.AvatarGroup,
          className
        )}
        style={{
          ...loadStyles({
            "--avatar-group-spacing": computeSpacing(spacing),
          }),
          ...style,
        }}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
