export type ThemeContextType = {
  theme: ThemeValues;
};

export enum Theme {
  Light = "light",
  Dark = "dark",
}
type ThemeValues = `${Theme}`;
