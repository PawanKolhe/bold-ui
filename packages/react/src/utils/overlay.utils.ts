import { classPrefix } from "../utils/styles.utils";
import { type OverlayTypeValues } from "../types/overlay.types";

export const getOverlayElements = (overlayType: OverlayTypeValues) =>
  document.body.querySelectorAll(`.${classPrefix(overlayType)}:not([hidden])`);
