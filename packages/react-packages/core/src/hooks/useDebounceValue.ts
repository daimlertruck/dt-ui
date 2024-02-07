import { useState, useEffect } from 'react';

export default function useDebounceValue<T>(
  value: T | null,
  delay = 500
): T | null {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    if (!value) return;

    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
