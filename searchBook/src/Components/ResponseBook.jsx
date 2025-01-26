import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ResponseBook({ book, index }) {
  const navigate = useNavigate();

  const selectedBook = {
    author: book.author_name,
    authorId: book.author_key,
    cover: book.cover_i,
    isEbook: book.ebook_access,
    publishYear: book.first_publish_year,
    publisher: book.publisher,
    ratings_average: book.ratings_average,
    title: book.title,
    subject: book.subject,
  };

  console.log(selectedBook);
  function onSelectBook() {
    navigate(`/details/${selectedBook.title}`, {
      state: { book: selectedBook },
    });
  }

  console.log(book);
  return (
    <Card
      sx={{
        height: "100%",
        display: " flex",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        onClick={onSelectBook}
        sx={{
          display: "flex",
          height: "100%",
          "&:hover": {
            backgroundColor: "#18251D",
          },
        }}
      >
        <CardMedia
          sx={{
            height: "100%",
            maxHeight: "80px",
            width: "20%",
            objectFit: "scale-down",
          }}
          image={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
          title="green iguana"
          component="img"
        />

        <CardContent sx={{ width: "80%" }}>
          <Typography variant="h6" component="div">
            {selectedBook.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {selectedBook.author.length > 0 && selectedBook.author.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
