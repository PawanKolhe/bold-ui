import {
  type ReactEventHandler,
  forwardRef,
  useCallback,
  useState,
  useMemo,
} from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import {
  type AvatarPlaceholderProps,
  type AvatarProps,
  AvatarSize,
  AvatarKind,
} from "./Avatar.types";
import styles from "./Avatar.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { getNameInitials } from "./Avatar.utils";
import { HiUser } from "react-icons/hi2";

/** Display user profile image, initials or fallback icon */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      children,
      className,
      style = {},
      name,
      src,
      srcSet,
      kind = "light",
      size = AvatarSize.DEFAULT,
      color,
      borderRadius,
      icon,
      onError,
      getInitials,
      loadingStrategy,
      imageProps,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();

    const [hasError, setHasError] = useState(false);
    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const handleError: ReactEventHandler<HTMLImageElement> = useCallback(
      (e) => {
        e.currentTarget.onerror = null;
        setHasError(true);
        onError?.(e);
        imageProps?.onError?.(e);
      },
      [imageProps, onError]
    );

    const handleLoad: ReactEventHandler<HTMLImageElement> = useCallback(() => {
      setHasImageLoaded(true);
    }, []);

    const computedInitials = useMemo(
      () =>
        name
          ? getInitials
            ? getInitials(name)
            : getNameInitials(name)
          : undefined,
      [getInitials, name]
    );

    const computedCustomSize = useMemo(
      () =>
        Object.values(AvatarSize).includes(size as AvatarSize)
          ? undefined
          : size,
      [size]
    );

    const mountImage = src && !hasError;

    return (
      <div
        className={clsx(
          classPrefix("Avatar"),
          styles.Avatar,
          {
            ...themeClasses,
            // Size
            [styles.Avatar__sizeDefault]: size === AvatarSize.DEFAULT,
            [styles.Avatar__sizeSmall]: size === AvatarSize.SMALL,
            [styles.Avatar__sizeLarge]: size === AvatarSize.LARGE,
            [styles.Avatar__sizeXLarge]: size === AvatarSize.X_LARGE,
            // Kind
            [styles.Avatar__kindLight]: kind === AvatarKind.LIGHT,
            [styles.Avatar__kindFill]: kind === AvatarKind.FILL,
            [styles.Avatar__sizeOutline]: kind === AvatarKind.OUTLINE,
          },
          className
        )}
        style={{
          ...themeStyles,
          ...loadStyles({
            "--avatar-size": computedCustomSize,
            "--avatar-border-radius": borderRadius,
            "--boldui-color-primary": color,
          }),
          ...style,
        }}
        ref={ref}
        {...restProps}
      >
        {(!mountImage || !hasImageLoaded) && (
          <AvatarPlaceholder
            initials={computedInitials}
            icon={icon}
            aria-label={name}
          >
            {children}
          </AvatarPlaceholder>
        )}
        {mountImage && (
          <img
            {...imageProps}
            className={clsx(
              classPrefix("Avatar-img"),
              styles.Avatar__img,
              imageProps?.className
            )}
            src={src}
            srcSet={srcSet}
            alt={name}
            onError={handleError}
            onLoad={handleLoad}
            loading={loadingStrategy}
            hidden={!hasImageLoaded}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export const AvatarPlaceholder = ({
  children,
  className,
  style = {},
  initials,
  icon,
  ...restProps
}: AvatarPlaceholderProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Avatar-placeholder"),
        styles.Avatar__placeholder,
        {
          [styles.Avatar__placeholderHasInitials]: !!initials,
        },
        className
      )}
      style={style}
      role="img"
      {...restProps}
    >
      <div
        className={clsx(classPrefix("Avatar-overlay"), styles.Avatar__overlay)}
        aria-hidden="true"
      >
        <div
          className={clsx(classPrefix("Avatar-border"), styles.Avatar__border)}
        />
      </div>
      {children ??
        (initials && (
          <div
            className={clsx(
              classPrefix("Avatar-initials"),
              styles.Avatar__initials
            )}
          >
            {initials}
          </div>
        )) ?? (
          <div
            className={clsx(classPrefix("Avatar-icon"), styles.Avatar__icon)}
          >
            {icon ?? <HiUser />}
          </div>
        )}
    </div>
  );
};

AvatarPlaceholder.displayName = "AvatarPlaceholder";
