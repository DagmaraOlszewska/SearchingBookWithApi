import Grid from "@mui/material/Grid2";
import { ResponseBook } from "./ResponseBook";

export function SearchBooks({ books }) {
  return (
    <Grid container>
      {books &&
        books.map((book, index) => (
          <Grid
            key={index}
            size={{ xs: 12 }}
            sx={{ margin: "0" }}
            onClick={() => onSelectBook(book)}
          >
            <ResponseBook book={book} index={index} />
          </Grid>
        ))}
    </Grid>
  );
}
