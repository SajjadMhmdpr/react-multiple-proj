import { useState, useEffect, useCallback } from "react";

export default function usePaginationHook(datas) {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const countRow = 4;

  useEffect(() => {
    console.log("usePaginationHook => datas updated");
    let filtered = getRandomItems(datas, 30);
    setListItems((prev) => {
      const todosJson = localStorage.getItem("todos");
      const addedLocalTodos = todosJson ? JSON.parse(todosJson) : null;
      if (addedLocalTodos !== null) return [...filtered, ...addedLocalTodos];
      return filtered;
    });
  }, [datas]);

  const pageCount = Math.ceil(listItems.length / countRow);

  const endIndex = countRow * currentPage;
  const startIndex = endIndex - countRow;
  const paginatedItems = listItems.slice(startIndex, endIndex);

  const handlePageChange = useCallback((event, page) => {
    setCurrentPage(page);
  }, []);

  return [paginatedItems, currentPage, handlePageChange, pageCount];
}

function getRandomItems(array, count) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(0, count);
}
