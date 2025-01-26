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

export function ResponseField({ response, index }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: " flex",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        onClick={() => console.log("hej")}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
          "&:hover": {
            backgroundColor: "#18251D",
          },
        }}
      >
        <CardContent sx={{ width: "80%" }}>
          <Typography variant="h6" component="div">
            {response.name} ({response.count})
          </Typography>
          {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {book.author_name[0]}
            </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
