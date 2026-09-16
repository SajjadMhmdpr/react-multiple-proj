import React, { useState, useEffect, useCallback, useRef } from "react";

export default function useLocalStorageHook(key, val) {
  const [value, setValue] = useState(() => {
    const todosJson = localStorage.getItem(key);
    return todosJson ? JSON.parse(todosJson) : val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const addValue = (newValue) => {
    setValue((prev) => [...prev, newValue]);
  };

  return [value, addValue];
}
