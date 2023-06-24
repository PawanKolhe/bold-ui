import { createContext, useContext } from "react";
import { type ModalContextType } from "./Modal.types";

const ModalContext = createContext<ModalContextType>({});

export const ModalProvider = ModalContext.Provider;

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
