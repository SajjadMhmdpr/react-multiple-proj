import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Navigate, Link, Outlet } from "react-router";

export default function Product({ id, title, image, description }) {
  return (
    <>
      <Card
        sx={{
          m: 1,
          width: {
            xs: "100%", // موبایل
            sm: 200, // تبلت
            md: 250, // دسکتاپ
          },
          maxWidth: 345,
        }}
      >
        <Link
          to={`/product/${id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
