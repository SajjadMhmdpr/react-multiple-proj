import React, { useEffect, useState } from "react";

export default function useFetchHook(url) {
  //console.log("useFetchHook ");

  const [list, setList] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useFetchHook => mount ");

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        //console.log("fetch todo list : ", data);
        setList(data);

        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);
  return [list, isPending, error];
}
