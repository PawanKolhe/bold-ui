import { createContext, useContext } from "react";
import { type RadioGroupContextType } from "./RadioGroup.types";

const RadioGroupContext = createContext<RadioGroupContextType>({});

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroupContext = () => {
  const radioGroupContext = useContext(RadioGroupContext);
  return radioGroupContext;
};
