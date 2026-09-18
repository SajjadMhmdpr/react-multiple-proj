import { useState, useEffect, useCallback, useMemo } from "react";

export default function usePaginationHook(datas, localValue): PaginationResult {
  const [listItems, setListItems] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const countRow = 4;

  useEffect(() => {
    console.log("usePaginationHook => datas updated");

    const filtered = getRandomItems(datas, 30);

    setListItems(filtered);
  }, [datas]);

  useEffect(() => {
    console.log("usePaginationHook => localStorage updated");

    if (localValue.length === 0) return;

    setListItems((prev) => {
      const newTodo = localValue[localValue.length - 1];

      // جلوگیری از اضافه شدن تکراری
      if (prev.some((x) => x.id === newTodo.id)) {
        return prev;
      }

      return [...prev, newTodo];
    });
  }, [localValue]);

  const pageCount = Math.ceil(listItems.length / countRow);

  const endIndex = countRow * currentPage;
  const startIndex = endIndex - countRow;
  const paginatedItems = listItems.slice(startIndex, endIndex);

  const handlePageChange = useCallback((event, page) => {
    setCurrentPage(page);
  }, []);

  return [
    paginatedItems,
    currentPage,
    pageCount,
    handlePageChange,
    setListItems,
  ];
}

function getRandomItems(array, count) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(0, count);
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type PaginationResult = [
  Todo[],
  number,
  number,
  (event: React.ChangeEvent<unknown>, page: number) => void,
  React.Dispatch<React.SetStateAction<Todo[]>>,
];
