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
import RefreshIcon from "@mui/icons-material/Refresh";
import Paging from "./../../Components/Paging/Paging";
import CircularProgress from "@mui/material/CircularProgress";

export default function TodoItems({ localValue }: TodoItemsProps) {
  //console.log("TodoItems ");

  const [datas, isPending, error] = useFetchHook(
    "https://jsonplaceholder.typicode.com/todos",
  );

  const [
    paginatedItems,
    currentPage,
    pageCount,
    handlePageChange,
    setListItems,
  ] = usePaginationHook(datas, localValue);

  const handleRedo = (id) => {
    setListItems((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, completed: false } : item,
      );
    });
  };
  const handleDelete = (id) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };
  const handleCheck = (id) => {
    setListItems((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, completed: true } : item,
      );
    });
  };

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
          {isPending && (
            <CircularProgress color="secondary" aria-label="Loading…" />
          )}
          {error && <div>{error}</div>}
          {datas && (
            <List>
              {paginatedItems.map((data) => {
                //console.log(data);
                return (
                  <ListItem
                    sx={{
                      textDecoration: data.completed ? "line-through" : "none",
                    }}
                    key={data.id}
                    secondaryAction={
                      !data.completed ? (
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton
                            edge="end"
                            aria-label="check"
                            onClick={() => {
                              handleCheck(data.id);
                            }}
                          >
                            <CheckIcon sx={{ color: "#1a923e" }} />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              handleDelete(data.id);
                            }}
                          >
                            <DeleteIcon sx={{ color: "#f50505" }} />
                          </IconButton>
                        </Box>
                      ) : (
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton
                            edge="end"
                            aria-label="redo"
                            onClick={() => {
                              handleRedo(data.id);
                            }}
                          >
                            <RefreshIcon sx={{ color: "#d1dd1f" }} />
                          </IconButton>
                        </Box>
                      )
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon sx={{ color: "#00eeff" }} />
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

type TodoItemsProps = {
  localValue: Todo[];
};
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
