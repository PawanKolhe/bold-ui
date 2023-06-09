export type ThemeContextType = {
  colorMode?: TThemeColorModeValues;
  primaryColor?: string;
  fontFamily?: string;
  focusOutlineColor?: string;
};

export enum ThemeColorMode {
  Light = "light",
  Dark = "dark",
}
type TThemeColorModeValues = `${ThemeColorMode}`;
