import { forwardRef, useState, useCallback, useEffect } from "react";
import { clsx } from "clsx";
import { classPrefix } from "../../../utils/styles.utils";
import { type RadioGroupProps, RadioDirection } from "./RadioGroup.types";
import { Radio } from "../Radio";
import styles from "./RadioGroup.module.scss";
import { RadioGroupProvider } from "./RadioGroup.context";
import { useId } from "../../../hooks/useId";
import { type RadioValueType } from "../Radio.types";
import { computeSpacing } from "../../../utils/layout.utils";

/** Manage the checked state of its children `radio` components */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      className,
      style = {},
      name,
      value,
      defaultValue,
      onChange,
      options,
      direction = "horizontal",
      size,
      spacing = 4,
      disabled,
      error,
      ...restProps
    },
    ref
  ) => {
    const [radioGroupValue, setRadioGroupValue] = useState<
      RadioValueType | undefined
    >(value ?? defaultValue);
    const id = useId("RadioGroup");

    const handleOnChange = useCallback((value: RadioValueType) => {
      setRadioGroupValue(value);
    }, []);

    useEffect(() => {
      if (radioGroupValue) onChange?.(radioGroupValue);
    }, [radioGroupValue, onChange]);

    return (
      <RadioGroupProvider
        value={{
          name: name ?? id,
          value: radioGroupValue,
          onChange: handleOnChange,
          size,
        }}
      >
        <div
          className={clsx(
            classPrefix("RadioGroup"),
            styles.RadioGroup,
            {
              // Direction
              [styles.RadioGroup__directionHorizontal]:
                direction === RadioDirection.HORIZONTAL,
              [styles.RadioGroup__directionVertical]:
                direction === RadioDirection.VERTICAL,
            },
            className
          )}
          style={{
            ["--radio-group-spacing" as string]: computeSpacing(spacing),
            ...style,
          }}
          ref={ref}
          {...restProps}
        >
          {Array.isArray(options)
            ? options.map((opt) => {
                if (typeof opt === "string" || typeof opt === "number") {
                  return (
                    <Radio
                      key={opt}
                      value={opt}
                      label={opt}
                      disabled={disabled}
                      error={error}
                    />
                  );
                } else {
                  return (
                    <Radio
                      key={opt.value}
                      value={opt.value}
                      label={opt.label ?? value}
                      disabled={opt.disabled ?? disabled}
                      error={error}
                    />
                  );
                }
              })
            : children}
        </div>
      </RadioGroupProvider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
