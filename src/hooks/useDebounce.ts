'use client';

import { useCallback, useRef } from 'react';

/**
 * Returns a debounced version of `fn` that only fires after `delay` ms
 * of inactivity. Ideal for CTA / form submit buttons to prevent double-clicks.
 */
export function useDebounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay = 500,
): T {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay],
  );

  return debounced as T;
}
