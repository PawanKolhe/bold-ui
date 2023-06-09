import { forwardRef, useState, useCallback, useEffect } from "react";
import { clsx } from "clsx";
import { classPrefix } from "../../../utils/styles.utils";
import {
  type CheckboxGroupProps,
  CheckboxDirection,
} from "./CheckboxGroup.types";
import { Checkbox } from "../Checkbox";
import styles from "./CheckboxGroup.module.scss";
import { CheckboxGroupProvider } from "./CheckboxGroup.context";
import { useId } from "../../../hooks/useId";
import { type CheckboxValueType } from "../Checkbox.types";
import { computeSpacing } from "../../../utils/layout.utils";

/** Manage the checked state of its children `Checkbox` components */
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
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
    const [checkboxGroupValue, setCheckboxGroupValue] = useState<
      CheckboxValueType[]
    >(value ?? defaultValue ?? []);
    const id = useId("CheckboxGroup");

    const handleOnChange = useCallback(
      (value: CheckboxValueType, checked: boolean) => {
        if (checked) setCheckboxGroupValue((prev) => [...prev, value]);
        else setCheckboxGroupValue((prev) => prev.filter((v) => v !== value));
      },
      []
    );

    useEffect(() => {
      onChange?.(checkboxGroupValue);
    }, [checkboxGroupValue, onChange]);

    return (
      <CheckboxGroupProvider
        value={{
          name: name ?? id,
          value: checkboxGroupValue,
          defaultValue,
          onChange: handleOnChange,
          size,
        }}
      >
        <div
          className={clsx(
            classPrefix("CheckboxGroup"),
            styles.CheckboxGroup,
            {
              // Direction
              [styles.CheckboxGroup__directionHorizontal]:
                direction === CheckboxDirection.HORIZONTAL,
              [styles.CheckboxGroup__directionVertical]:
                direction === CheckboxDirection.VERTICAL,
            },
            className
          )}
          style={{
            ["--checkbox-group-spacing" as string]: computeSpacing(spacing),
            ...style,
          }}
          ref={ref}
          {...restProps}
        >
          {Array.isArray(options)
            ? options.map((opt) => {
                if (typeof opt === "string" || typeof opt === "number") {
                  return (
                    <Checkbox
                      key={opt}
                      value={opt}
                      label={opt}
                      disabled={disabled}
                      error={error}
                    />
                  );
                } else {
                  return (
                    <Checkbox
                      key={opt.value}
                      value={opt.value}
                      label={opt.label ?? value}
                      description={opt.description}
                      disabled={opt.disabled ?? disabled}
                      error={error}
                    />
                  );
                }
              })
            : children}
        </div>
      </CheckboxGroupProvider>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";
