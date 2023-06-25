import { forwardRef } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { type AvatarGroupProps } from "./Avatar.types";
import styles from "./Avatar.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { computeSpacing } from "../../utils/layout.utils";

/** A wrapper to stack multiple Avatars together */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, style = {}, spacing = 0, ...restProps }, ref) => {
    const { themeStyles, themeClasses } = useTheme();

    return (
      <div
        className={clsx(
          classPrefix("AvatarGroup"),
          styles.AvatarGroup,
          {
            ...themeClasses,
          },
          className
        )}
        style={{
          ...themeStyles,
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
