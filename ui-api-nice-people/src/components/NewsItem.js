import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function NewsItem({ el }) {
	
  return (
    <Card>
      <a
        href={el.url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-item"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={
              el.image
                ? el.image
                : "https://wallpaperaccess.com/full/2112542.jpg"
            }
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}
