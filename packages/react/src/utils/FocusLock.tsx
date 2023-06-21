import { type ReactNode, useEffect, useRef, type HTMLAttributes } from "react";
import { FOCUSABLE_ELEMENTS } from "../constants/focusableElements.constants";

type FocusLockProps = {
  children: ReactNode;
  isLocked?: boolean;
  autoFocusOnMount?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const FocusLock = ({
  children,
  isLocked = true,
  autoFocusOnMount,
  ...restProps
}: FocusLockProps) => {
  const rootNode = useRef<HTMLDivElement | null>(null);
  const focusableItems = useRef<NodeListOf<HTMLDivElement>>();

  useEffect(() => {
    const updateFocusableItems = () => {
      if (rootNode.current) {
        focusableItems.current =
          rootNode.current.querySelectorAll<HTMLDivElement>(
            FOCUSABLE_ELEMENTS.join(", ")
          );
      }
    };

    const observer = new MutationObserver(() => {
      updateFocusableItems();
    });
    updateFocusableItems();
    if (autoFocusOnMount) focusableItems.current?.[0]?.focus();

    if (rootNode.current)
      observer.observe(rootNode.current, { childList: true });
    return () => {
      observer.disconnect();
    };
  }, [autoFocusOnMount]);

  useEffect(() => {
    const handleKeyPress = (event: globalThis.KeyboardEvent) => {
      if (!focusableItems.current) return;

      const { key, shiftKey } = event;
      const {
        length,
        0: firstItem,
        [length - 1]: lastItem,
      } = focusableItems.current;

      if (isLocked && key === "Tab") {
        // If only one item then prevent tabbing when locked
        if (length === 1) {
          event.preventDefault();
          return;
        }

        // If focused on last item then focus on first item when tab is pressed
        if (!shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
          return;
        }

        // If focused on first item then focus on last item when shift + tab is pressed
        if (shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isLocked, focusableItems]);

  return (
    <div {...restProps} ref={rootNode}>
      {children}
    </div>
  );
};
