import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function BookCard({ book, index }) {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <Card
      sx={{
        height: "100%",
        display: " flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        onClick={() => console.log("hej")}
        data-active={selectedCard === index ? "" : undefined}
        sx={{
          height: "100%",
          "&:hover": {
            backgroundColor: "#18251D",
          },
        }}
      >
        <CardMedia
          sx={{
            height: "100%",
            maxHeight: "250px",
            width: "100%",
            objectFit: "fill",
            // objectFit: "scale-down",
          }}
          image={book.cover}
          title="green iguana"
          component="img"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {book.author}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </CardActionArea>
    </Card>
  );
}
