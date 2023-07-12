import { useEffect } from "react";
import { useScrollbarSize } from "./useScrollbarSize";
import { getOverlayElements } from "../utils/overlay.utils";
import { type OverlayTypeValues } from "../types/overlay.types";
import { SCROLL_LOCK_CLASSNAME } from "../constants/styles.constants";

type UseScrollLockProps = {
  enable: boolean;
  overlayType: OverlayTypeValues;
  isContentVisible: boolean;
  preserveScrollBarGap?: boolean;
};

export const useScrollLock = ({
  enable,
  overlayType,
  isContentVisible,
  preserveScrollBarGap = true,
}: UseScrollLockProps) => {
  const { width } = useScrollbarSize();

  useEffect(() => {
    if (enable) {
      const modals = getOverlayElements(overlayType);
      if (isContentVisible && modals.length === 1) {
        document.body.classList.add(SCROLL_LOCK_CLASSNAME);
      }
      return () => {
        const modals = getOverlayElements(overlayType);
        if (modals.length === 0) {
          document.body.classList.remove(SCROLL_LOCK_CLASSNAME);
        }
      };
    }
  }, [isContentVisible, enable, overlayType]);

  useEffect(() => {
    if (preserveScrollBarGap)
      document.body.style.setProperty(
        "--boldui-removed-body-scroll-bar-size",
        `${width}px !important`
      );
  }, [preserveScrollBarGap, width]);
};
