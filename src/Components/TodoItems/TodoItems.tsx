import React, { useState, useEffect } from "react";
import useFetchHook from "./../../Hooks/FetchHook";
import usePaginationHook from "./../../Hooks/PaginationHook";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Paging from "./../../Components/Paging/Paging";

export default function TodoItems() {
  //console.log("TodoItems ");

  const [datas, isPending, error] = useFetchHook(
    "https://jsonplaceholder.typicode.com/todos",
  );

  const [paginatedItems, currentPage, handlePageChange, pageCount] =
    usePaginationHook(datas);

  return (
    <>
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
        variant="h6"
        component="div"
      >
        Avatar with text and icon
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 250,
        }}
      >
        <Box sx={{ width: "50%", overflow: "auto" }}>
          {isPending && <div>Loading.......</div>}
          {error && <div>{error}</div>}
          {datas && (
            <List>
              {paginatedItems.map((data) => {
                //console.log(data);
                return (
                  <ListItem
                    key={data.id}
                    secondaryAction={
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton edge="end" aria-label="delete">
                          <CheckIcon sx={{ color: "#1a923e" }} />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon sx={{ color: "#f50505" }} />
                        </IconButton>
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon sx={{ color: "#d4ff00" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <Box sx={{ width: "70%" }}>
                      <ListItemText
                        primary={data.id + " : " + data.title}
                        secondary={false ? "Secondary text" : null}
                      />
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          )}
        </Box>
      </Box>
      <Paging
        count={pageCount}
        page={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
