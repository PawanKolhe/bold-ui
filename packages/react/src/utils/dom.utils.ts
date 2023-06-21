import { classPrefix } from "./styles.utils";

export const getOverlayElements = (elementType: "Modal" | "Drawer") =>
  document.body.getElementsByClassName(classPrefix(elementType));
