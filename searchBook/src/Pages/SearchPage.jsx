import { useEffect, useState, useCallback } from "react";
import { Layout } from "../Components/Layout";
import { Searchfield } from "../Components/Searchfield";
import { SearchBooks } from "../Components/SearchBooks";
import { Divider, Typography } from "@mui/material";
import { SearchResponse } from "../Components/SearchResponse";
import { useBooks } from "../Hooks/useBooks";
import { Loader } from "../Components/Loader";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const {
    response: books,
    isLoading: bookLoading,
    error: bookError,
  } = useBooks(query, "title", "5");
  const [authors, setAuthors] = useState([]);
  const {
    response: authorResponse,
    isLoading: authorLoading,
    error: authorError,
  } = useBooks(query, "author");
  const globalLoading = bookLoading || authorLoading;

  const setAuthorAndCount = useCallback(
    (authors) => {
      const authorDetails = {};
      if (authors && authors.length !== 0)
        authors.forEach((author) => {
          author.author_name
            .filter((name) => {
              return name.toLowerCase().includes(query.toLowerCase());
            })
            .forEach((name, index) => {
              const authorKey = author.author_key[index];
              if (!authorDetails[authorKey]) {
                authorDetails[authorKey] = {
                  count: 0,
                  name: name,
                  authorId: authorKey,
                };
              }
              authorDetails[authorKey].count += 1;
            });
        });
      console.log(authorDetails);
      return Object.values(authorDetails);
    },
    [query]
  );

  useEffect(
    function () {
      const data = setAuthorAndCount(authorResponse);
      const result = data.sort((a, b) => b.count - a.count).slice(0, 3);
      setAuthors(result);
    },
    [authorResponse, setAuthorAndCount]
  );

  console.log(globalLoading);
  return (
    <>
      <Layout backgroundColor={"#283E30"}>
        <Searchfield query={query} setQuery={setQuery} />
        {globalLoading && <Loader />}
        {(bookError || authorError) && (
          <div style={{ marginTop: "3rem" }}>ERRORR</div>
        )}
        {books.length !== 0 && !globalLoading && (
          <>
            {" "}
            <Typography variant="h6" marginTop={"3rem"}>
              Books
            </Typography>
            <SearchBooks books={books} />
          </>
        )}
        {authors.length !== 0 && !globalLoading && (
          <>
            <Divider variant="middle" sx={{ backgroundColor: "#FFEF85" }} />
            <Typography
              variant="h6"
              marginTop={books.length !== 0 ? "1rem" : "3rem"}
            >
              Authors
            </Typography>
            <SearchResponse response={authors} />
          </>
        )}
      </Layout>
    </>
  );
}
