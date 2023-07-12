interface DebouncedFn<F extends (...args: any[]) => void> {
  (...args: Parameters<F>): void;
  cancel: () => void;
}

export const debounce = <F extends (...args: any[]) => void>(
  fn: F,
  waitFor: number
): DebouncedFn<F> => {
  let timeout: NodeJS.Timeout | null;

  const clear = () => {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const debouncedFn = (...args: Parameters<F>): void => {
    clear();

    timeout = setTimeout(() => {
      fn(...args);
    }, waitFor);
  };

  debouncedFn.cancel = () => {
    clear();
  };

  return debouncedFn;
};
