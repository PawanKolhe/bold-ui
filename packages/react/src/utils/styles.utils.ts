import {
  CLASSNAME_PREFIX,
  CSS_VARIABLE_PREFIX,
} from "../constants/styles.constants";

/**
 * Prepends a prefix to the given class name.
 */
export const cx = (className: string) => `${CLASSNAME_PREFIX}--${className}`;

/**
 * Prepends a prefix to the given CSS variable.
 */
export const cs = (className: string) =>
  `--${CSS_VARIABLE_PREFIX}-${className}`;

/**
 * Returns object with the given CSS property and value if the value is defined.
 */
export const loadStyle = (cssProperty: string, value: string | undefined) =>
  value ? { [cssProperty]: value } : {};
