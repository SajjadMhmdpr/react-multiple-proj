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

  return [value, addValue, getLastId(key)];
}

const getLastId = (key) => {
  const arr = JSON.parse(localStorage.getItem(key) || "[]");

  const maxId = arr.length > 0 ? Math.max(...arr.map((i) => i.id)) + 1 : 201;

  return maxId;
};
