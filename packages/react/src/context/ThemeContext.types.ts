export type ThemeContextType = {
  colorMode?: ThemeColorModeValues;
  primaryColor?: string;
  fontFamily?: string;
  focusOutlineColor?: string;
};

export enum ThemeColorMode {
  Light = "light",
  Dark = "dark",
}
type ThemeColorModeValues = `${ThemeColorMode}`;
