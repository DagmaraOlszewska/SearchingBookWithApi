import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export function useBooks(query, category, limit = "") {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      const fetchSearchingBooks = debounce(async () => {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://openlibrary.org/search.json?${category}=${query}&limit=${limit}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          // console.log(data.docs);
          setResponse(data.docs);
        } catch (e) {
          if (e.name !== "AbortError") {
            console.log("error!!!");
            // console.log(e);
            setError(e.message);
          }
        } finally {
          setIsLoading(false);
        }
      }, 400);
      if (query && query.length > 3) fetchSearchingBooks();
      return function () {
        controller.abort();
        fetchSearchingBooks.cancel();
      };
    },
    [query, category, limit]
  );

  return { response, isLoading, error };
}
