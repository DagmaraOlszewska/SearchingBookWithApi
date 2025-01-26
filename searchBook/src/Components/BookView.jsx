import Grid from "@mui/material/Grid2";
import { BookCard } from "./BookCard";

export function BookView({ books }) {
  return (
    <Grid container columnSpacing={2}>
      {books &&
        books.map((book, index) => (
          <Grid
            key={index}
            size={{ xs: 6, sm: 6, md: 3, lg: 3 }}
            sx={{ margin: "0 0 2rem 0" }}
          >
            <BookCard book={book} index={index} />
          </Grid>
        ))}
    </Grid>
  );
}
