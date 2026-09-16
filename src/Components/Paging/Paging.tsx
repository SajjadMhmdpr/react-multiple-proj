import React, { useState, memo } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const Paging = memo(({ count, page, handlePageChange }) => {
  console.log("khkhkhkhkhkhkkhkhkhkkh :)))))))))))");
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Pagination
        count={count}
        page={page}
        siblingCount={2}
        boundaryCount={2}
        onChange={handlePageChange}
      />
    </Box>
  );
});

export default Paging;
