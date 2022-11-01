import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, initialValue: string) {
  const currentValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : initialValue;

  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
