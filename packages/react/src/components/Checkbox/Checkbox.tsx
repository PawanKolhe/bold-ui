import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { CheckboxSize, type CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { useId } from "../../hooks/useId";
import { FaCheck, FaMinus } from "react-icons/fa";
import { useCheckboxGroupContext } from "./CheckboxGroup/CheckboxGroup.context";

/** Capture boolean input from user */
export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      className,
      style = {},
      name,
      value,
      label,
      description,
      size,
      indeterminate,
      icon,
      wrapperProps,
      labelProps,
      error,
      disabled,
      checked,
      defaultChecked,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();
    const id = useId("Checkbox");
    const checkboxRef = useRef<HTMLInputElement>(null);
    const {
      name: contextName,
      value: contextValue,
      defaultValue: contextDefaultValue,
      onChange: contextOnChange,
      size: contextSize,
    } = useCheckboxGroupContext();

    const [isChecked, setIsChecked] = useState(
      !!(
        checked ??
        defaultChecked ??
        (value
          ? contextValue?.includes(value) ??
            contextDefaultValue?.includes(value)
          : undefined)
      )
    );

    useEffect(() => {
      if (checkboxRef.current && typeof indeterminate === "boolean") {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (event) => {
          onChange?.(event.currentTarget.checked);
          setIsChecked(event.currentTarget.checked);
          if (value) {
            contextOnChange?.(value, event.currentTarget.checked);
          }
        },
        [contextOnChange, onChange, value]
      );

    const checkedValue = useMemo(
      () =>
        isChecked ??
        (value && contextValue ? contextValue.includes(value) : undefined),
      [contextValue, isChecked, value]
    );

    const computedSize = size ?? contextSize;

    return (
      <div
        className={clsx(
          classPrefix("Checkbox"),
          styles.Checkbox,
          {
            ...themeClasses,
            // Size
            [styles.Checkbox__sizeDefault]:
              computedSize === CheckboxSize.DEFAULT,
            [styles.Checkbox__sizeSmall]: computedSize === CheckboxSize.SMALL,
            [styles.Checkbox__sizeLarge]: computedSize === CheckboxSize.LARGE,
            // Others
            [styles.Checkbox__disabled]: disabled,
            [styles.Checkbox__error]: error,
            [styles.Checkbox__isChecked]: isChecked,
            [styles.Checkbox__indeterminate]: indeterminate,
          },
          className,
          wrapperProps?.className
        )}
        style={{
          ...themeStyles,
          ...loadStyles({}),
          ...style,
          ...wrapperProps?.style,
        }}
        ref={ref}
        {...wrapperProps}
      >
        <div
          className={clsx(
            classPrefix("Checkbox-input-wrapper"),
            styles.Checkbox__inputWrapper
          )}
        >
          <div
            className={clsx(
              classPrefix("Checkbox-icon"),
              styles.Checkbox__icon
            )}
          >
            {icon ?? indeterminate ? <FaMinus /> : <FaCheck />}
          </div>
          <input
            id={id}
            className={clsx(
              classPrefix("Checkbox-input"),
              styles.Checkbox__input
            )}
            name={name ?? contextName}
            value={value}
            checked={checkedValue}
            defaultChecked={defaultChecked}
            onChange={handleOnChange}
            disabled={disabled}
            {...restProps}
            type="checkbox"
            ref={checkboxRef}
          />
        </div>
        {(label ?? description) && (
          <div
            className={clsx(
              classPrefix("Checkbox-label-wrapper"),
              styles.Checkbox__labelWrapper
            )}
          >
            {label && (
              <label
                htmlFor={id}
                className={clsx(
                  classPrefix("Checkbox-label"),
                  styles.Checkbox__label,
                  labelProps?.className
                )}
                {...labelProps}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={clsx(
                  classPrefix("Checkbox-description"),
                  styles.Checkbox__description,
                  labelProps?.className
                )}
              >
                {description}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
