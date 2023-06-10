import { createContext, useContext, useMemo } from "react";
import { type ThemeContextType } from "./ThemeContext.types";
import { cs, loadStyle } from "../utils/styles.utils";

const ThemeContext = createContext<ThemeContextType>({ colorMode: "light" });

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  const themeStyles = useMemo(() => {
    return {
      ...loadStyle(cs("primary-color"), theme.primaryColor),
      ...loadStyle(cs("font-family"), theme.fontFamily),
      ...loadStyle(cs("focus-outline-color"), theme.focusOutlineColor),
    };
  }, [theme]);

  const themeClasses = useMemo(() => {
    return {
      "boldui-theme-dark": theme.colorMode === "dark",
    };
  }, [theme]);

  return { theme, themeStyles, themeClasses };
};
