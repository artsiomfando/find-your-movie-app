import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, initialValue: string) {
  let currentValue;

  if (typeof window !== "undefined") {
    currentValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : initialValue;
  } else {
    currentValue = initialValue;
  }

  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
