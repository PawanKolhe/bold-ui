import { createContext, useContext, useMemo } from "react";
import { type ThemeContextType } from "./ThemeContext.types";
import { cs } from "../utils/styles.utils";

const ThemeContext = createContext<ThemeContextType>({ colorMode: "light" });

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  const themeStyles = useMemo(() => {
    return {
      ...(theme.primaryColor
        ? { [cs("primary-color")]: theme.primaryColor }
        : {}),
      ...(theme.fontFamily ? { [cs("font-family")]: theme.fontFamily } : {}),
      ...(theme.focusOutlineColor
        ? { [cs("focus-outline-color")]: theme.focusOutlineColor }
        : {}),
    };
  }, [theme]);

  return { theme, themeStyles };
};
