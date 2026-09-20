import React from "react";
import Box from "@mui/material/Box";

import Product from "./../../Components/Product/Product";
import { productItems } from "./../../Datas";
export default function Products() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,

          padding: 2,
          flexWrap: "wrap",
        }}
      >
        {productItems.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </Box>
    </>
  );
}
