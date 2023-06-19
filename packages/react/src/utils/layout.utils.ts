export const computeSpacing = (spacing: number | string) => {
  if (typeof spacing === "number") {
    return `calc(${spacing} * var(--boldui-spacing-base-unit, 0.25rem))`;
  }
  return spacing;
};
