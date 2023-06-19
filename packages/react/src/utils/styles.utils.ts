import {
  CLASSNAME_PREFIX,
  CSS_VARIABLE_PREFIX,
} from "../constants/styles.constants";

/**
 * Prepends a prefix to the given class name.
 */
export const classPrefix = (className: string) =>
  `${CLASSNAME_PREFIX}--${className}`;

/**
 * Prepends a prefix to the given CSS variable.
 */
export const cssvarPrefix = (className: string) =>
  `--${CSS_VARIABLE_PREFIX}-${className}`;

/**
 * Filters out object keys when value is falsy.
 */
export const loadStyles = (
  cssProperties: Record<string, string | number | undefined>
) => {
  const styleObj: Record<string, string | number> = {};
  Object.entries(cssProperties).forEach(([key, value]) => {
    if (value) styleObj[key] = value;
  });
  return styleObj;
};
