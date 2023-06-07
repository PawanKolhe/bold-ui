import { createContext, useContext } from "react";
import { type ThemeContextType } from "./ThemeContext.types";

const ThemeContext = createContext<ThemeContextType>({ theme: "light" });

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
