import { createContext, useContext, useMemo } from "react";
import { type ThemeContextType } from "./ThemeContext.types";
import { cssvarPrefix, loadStyles } from "../utils/styles.utils";

const ThemeContext = createContext<ThemeContextType>({ colorMode: "light" });

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  const themeStyles = useMemo(() => {
    return {
      ...loadStyles({
        [cssvarPrefix("primary-color")]: theme.primaryColor,
        [cssvarPrefix("font-family")]: theme.fontFamily,
        [cssvarPrefix("focus-outline-color")]: theme.focusOutlineColor,
      }),
    };
  }, [theme]);

  const themeClasses = useMemo(() => {
    return {
      "boldui-theme-dark": theme.colorMode === "dark",
    };
  }, [theme]);

  return { theme, themeStyles, themeClasses };
};
