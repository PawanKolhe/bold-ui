import { createContext, useContext } from "react";
import { type CheckboxGroupContextType } from "./CheckboxGroup.types";

const CheckboxGroupContext = createContext<CheckboxGroupContextType>({});

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export const useCheckboxGroupContext = () => {
  const checkboxGroupContext = useContext(CheckboxGroupContext);
  return checkboxGroupContext;
};
