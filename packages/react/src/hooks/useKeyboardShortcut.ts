import { useEffect } from "react";

export const useKeyboardShortcut = (
  shortcutKeys: Record<
    globalThis.KeyboardEvent["key"],
    (e: globalThis.KeyboardEvent) => void
  >
) => {
  useEffect(() => {
    const keyListener = (e: globalThis.KeyboardEvent) => {
      const listener = shortcutKeys[e.key];
      listener?.(e);
    };
    window.addEventListener("keydown", keyListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, [shortcutKeys]);
};
