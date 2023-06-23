import { type ReactNode, useEffect, useRef, type HTMLAttributes } from "react";
import { FOCUSABLE_ELEMENTS } from "../constants/focusableElements.constants";
import { classPrefix } from "./styles.utils";
import { type FocusableElement } from "../types/dom.types";

type FocusLockProps = {
  children: ReactNode;
  lockFocus?: boolean;
  autoFocusOnMount?: boolean;
  returnFocusOnClose?: boolean;
  initialFocusRef?: React.RefObject<FocusableElement>;
  finalFocusRef?: React.RefObject<FocusableElement>;
} & HTMLAttributes<HTMLDivElement>;

export const FocusLock = ({
  children,
  lockFocus = true,
  autoFocusOnMount,
  returnFocusOnClose,
  initialFocusRef,
  finalFocusRef,
  ...restProps
}: FocusLockProps) => {
  const rootNode = useRef<HTMLDivElement | null>(null);
  const focusableItems = useRef<NodeListOf<HTMLElement>>();
  const returnFocusNode = useRef<HTMLElement | null>(null);

  // Find focusable items
  useEffect(() => {
    const updateFocusableItems = () => {
      if (rootNode.current) {
        focusableItems.current =
          rootNode.current.querySelectorAll<HTMLDivElement>(
            FOCUSABLE_ELEMENTS.join(", ")
          );
      }
    };
    updateFocusableItems();
    const observer = new MutationObserver(() => {
      updateFocusableItems();
    });
    if (rootNode.current)
      observer.observe(rootNode.current, { childList: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle autofocus and return focus
  useEffect(() => {
    if (autoFocusOnMount) {
      returnFocusNode.current =
        (finalFocusRef?.current as HTMLElement) ??
        (document.activeElement as HTMLElement);
      if (initialFocusRef) {
        initialFocusRef.current?.focus();
      } else {
        focusableItems.current?.[0]?.focus();
      }
    }
    return () => {
      if (returnFocusOnClose) returnFocusNode.current?.focus();
    };
  }, [autoFocusOnMount, finalFocusRef, initialFocusRef, returnFocusOnClose]);

  // Handle Keyboard shortcut 'Tab'
  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if (!focusableItems.current || e.key !== "Tab") return;

      const {
        length,
        0: firstItem,
        [length - 1]: lastItem,
      } = focusableItems.current;

      if (lockFocus) {
        // If only one item then prevent tabbing when locked
        if (length === 1) {
          e.preventDefault();
          return;
        }

        // If focused on last item then focus on first item when tab is pressed
        if (!e.shiftKey && document.activeElement === lastItem) {
          e.preventDefault();
          firstItem.focus();
          return;
        }

        // If focused on first item then focus on last item when shift + tab is pressed
        if (e.shiftKey && document.activeElement === firstItem) {
          e.preventDefault();
          lastItem.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [lockFocus]);

  return (
    <div
      {...restProps}
      className={classPrefix("FocusLock")}
      tabIndex={-1}
      ref={rootNode}
    >
      {children}
    </div>
  );
};
