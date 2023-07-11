import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import { RadioSize, type RadioProps } from "./Radio.types";
import styles from "./Radio.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { useId } from "../../hooks/useId";
import { FaCircle } from "react-icons/fa";
import { useRadioGroupContext } from "./RadioGroup/RadioGroup.context";
import { mergeRefs } from "../../utils/refs.utils";

/** Capture boolean input from user */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      style = {},
      name,
      value,
      label,
      size = "default",
      icon,
      wrapperProps,
      labelProps,
      error,
      disabled,
      checked,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();
    const id = useId("Radio");
    const radioRef = useRef<HTMLInputElement>(null);
    const {
      name: contextName,
      value: contextValue,
      onChange: contextOnChange,
      size: contextSize,
    } = useRadioGroupContext();

    // Will be used when this component is not inside a RadioGroup
    const [isCheckedNoContext, setIsCheckedNoContext] = useState<boolean>(
      checked ?? false
    );

    const isInsideRadioGroup = useMemo(
      () => !!contextOnChange,
      [contextOnChange]
    );

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (event) => {
          onChange?.(event);
          if (value !== undefined) contextOnChange?.(value);
          if (!isInsideRadioGroup) setIsCheckedNoContext(event.target.checked);
        },
        [contextOnChange, isInsideRadioGroup, onChange, value]
      );

    const computedSize = size ?? contextSize;

    const checkedValue = useMemo(
      () =>
        isInsideRadioGroup
          ? contextValue !== undefined && value !== undefined
            ? contextValue === value
            : false
          : isCheckedNoContext,
      [contextValue, isCheckedNoContext, isInsideRadioGroup, value]
    );

    return (
      <div
        className={clsx(
          classPrefix("Radio"),
          styles.Radio,
          {
            ...themeClasses,
            // Size
            [styles.Radio__sizeDefault]: computedSize === RadioSize.DEFAULT,
            [styles.Radio__sizeSmall]: computedSize === RadioSize.SMALL,
            [styles.Radio__sizeLarge]: computedSize === RadioSize.LARGE,
            // Others
            [styles.Radio__disabled]: disabled,
            [styles.Radio__error]: error,
            [styles.Radio__isChecked]: checkedValue,
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
        {...wrapperProps}
      >
        <div
          className={clsx(
            classPrefix("Radio-input-wrapper"),
            styles.Radio__inputWrapper
          )}
        >
          <div
            className={clsx(classPrefix("Radio-icon"), styles.Radio__icon)}
            aria-hidden="true"
          >
            {icon ?? <FaCircle />}
          </div>
          <input
            id={id}
            className={clsx(classPrefix("Radio-input"), styles.Radio__input)}
            name={name ?? contextName}
            value={value}
            checked={checkedValue}
            onChange={handleOnChange}
            disabled={disabled}
            {...restProps}
            type="radio"
            ref={mergeRefs(ref, radioRef)}
          />
        </div>
        {label && (
          <div
            className={clsx(
              classPrefix("Radio-label-wrapper"),
              styles.Radio__labelWrapper
            )}
          >
            {label && (
              <label
                htmlFor={id}
                className={clsx(
                  classPrefix("Radio-label"),
                  styles.Radio__label,
                  labelProps?.className
                )}
                {...labelProps}
              >
                {label}
              </label>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";
