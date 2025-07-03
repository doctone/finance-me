import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false): [boolean, () => void, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setToggle = useCallback((newValue?: boolean) => {
    if (newValue !== undefined) {
      setValue(newValue);
    } else {
      setValue(prev => !prev);
    }
  }, []);

  return [value, toggle, setToggle];
};