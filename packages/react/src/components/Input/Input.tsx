import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { InputSize, type InputProps, InputKind } from "./Input.types";
import styles from "./Input.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { mergeRefs } from "../../utils/refs.utils";

/** Input component is a component that is used to get user input in a text field. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      style = {},
      size = "default",
      kind = "default",
      color,
      compact = false,
      borderWidth,
      borderRadius,
      error,
      icon,
      clearable = false,
      onClear,
      clearedValue = "",
      onChange,
      disabled,
      value,
      defaultValue,
      type = "text",
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();

    const inputRef = useRef<HTMLInputElement>(null);

    const [hasValue, setHasValue] = useState(!!(value ?? defaultValue));

    const computedColor = useMemo(() => {
      if (error) {
        return "var(--boldui-color-error)";
      } else {
        return color;
      }
    }, [color, error]);

    const handleOnClear = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onChange?.(clearedValue);
        // In case the input is uncontrolled, we need to clear the input value
        if (value === undefined && inputRef.current)
          inputRef.current.value = "";
        inputRef.current?.focus();
        onClear?.();
        setHasValue(false);
      },
      [clearedValue, onChange, onClear, value]
    );

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (event) => {
          onChange?.(event.target.value);
          if (event.target.value) {
            setHasValue(true);
          } else {
            setHasValue(false);
          }
        },
        [onChange]
      );

    return (
      <div
        className={clsx(
          classPrefix("Input-wrapper"),
          styles.Input__wrapper,
          {
            ...themeClasses,
            // Size
            [styles.Input__sizeDefault]: size === InputSize.DEFAULT,
            [styles.Input__sizeSmall]: size === InputSize.SMALL,
            [styles.Input__sizeLarge]: size === InputSize.LARGE,
            [styles.Input__sizeXLarge]: size === InputSize.X_LARGE,
            // Kind
            [styles.Input__kindDefault]: kind === InputKind.DEFAULT,
            [styles.Input__kindFilled]: kind === InputKind.FILLED,
            [styles.Input__kindUnstyled]: kind === InputKind.UNSTYLED,
            // Others
            [styles.Input__disabled]: disabled,
            [styles.Input__compact]: compact,
            [styles.Input__hasIcon]: !!icon,
            [styles.Input__error]: error,
            [styles.Input__clearable]: clearable,
            [styles.Input__hasValue]: hasValue,
          },
          className
        )}
        style={{
          ...themeStyles,
          ...loadStyles({
            "--boldui-color-primary": computedColor,
            "--button-border-width": borderWidth,
            "--button-border-radius": borderRadius,
          }),
          ...style,
        }}
      >
        {icon && (
          <div className={clsx(classPrefix("Input-icon"), styles.Input__icon)}>
            {icon}
          </div>
        )}
        <input
          className={clsx(classPrefix("Input"), styles.Input)}
          onChange={handleOnChange}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          type={type}
          {...restProps}
          ref={mergeRefs(ref, inputRef)}
        />
        {clearable && hasValue && (
          <div
            className={clsx(
              classPrefix("Input-clearable-wrapper"),
              styles.Input__clearableWrapper
            )}
          >
            <button
              className={clsx(
                classPrefix("Input-clearable-button"),
                styles.Input__clearableButton
              )}
              onClick={(e) => {
                handleOnClear(e);
              }}
            >
              <div
                className={clsx(
                  classPrefix("Input-clearable-button-icon"),
                  styles.Input__clearableButtonIcon
                )}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
