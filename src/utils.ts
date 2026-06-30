import { useCallback, useState } from 'react';

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (next: T | ((prev: T) => T)) => void] {
  const [internal, setInternal] = useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(current) : next;
      if (!isControlled) {
        setInternal(resolved);
      }
      onChange?.(resolved);
    },
    [current, isControlled, onChange],
  );

  return [current, setValue];
}

export function sanitizePlateNumber(input: string, maxDigits: number): string {
  return input.replace(/\D/g, '').slice(0, maxDigits);
}
