import { classPrefix } from "../../utils/styles.utils";

export const getModalElements = () =>
  document.body.querySelectorAll(`.${classPrefix("Modal")}:not([hidden])`);
