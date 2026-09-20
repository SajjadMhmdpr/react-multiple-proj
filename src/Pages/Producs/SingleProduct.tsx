import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { productItems } from "./../../Datas";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function SingleProduct() {
  const urlParam = useParams();

  const item = productItems.find((i) => i.id === Number(urlParam.productId));

  if (!item) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100%",
        p: {
          xs: 2,
          sm: 3,
          md: 5,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          // موبایل
          flexDirection: {
            xs: "column",
            md: "row",
          },

          p: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{
              width: "100%",
              maxWidth: 400,
              height: {
                xs: 150,
                sm: 250,
                md: 350,
              },
              objectFit: "contain",
            }}
          />
        </Box>

        {/* اطلاعات */}
        <CardContent
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            {item.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {item.description}
          </Typography>

          <Typography variant="body2" sx={{ mb: 3 }}>
            Product ID: {item.id}
          </Typography>

          <Button variant="contained" size="large">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
};
