import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import useInputHook from "./../../Hooks/InputHook";
import TodoItems from "./../../Components/TodoItems/TodoItems";
import useLocalStorageHook from "./../../Hooks/LocalStorageHook";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

export default function TodoList() {
  const [value, setValue, binding] = useInputHook("");

  const [localValue, addLocalValue, getLastId] = useLocalStorageHook(
    "todos",
    "",
  );

  const valNewId = useRef(getLastId);

  const onClickHandler = (e) => {
    //console.log("value : ", value);
    if (value === "" || value === null) return;
    addLocalValue(createTodo(value, valNewId.current));
    valNewId.current++;
    setValue("");
  };
  const onClickHandlerClearLocalStorage = (e) => {
    //console.log("value : ", value);
    localStorage.clear();
  };

  return (
    <>
      <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
        <Box sx={{ my: "auto" }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            endIcon={<DeleteIcon />}
            onClick={onClickHandlerClearLocalStorage}
          >
            Clear Local Storage
          </Button>
        </Box>
        <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
          <TextField
            {...binding}
            label="Your Task"
            color="secondary"
            focused
            sx={{ m: 2, width: "70%" }}
          />
          <Box sx={{ my: "auto" }}>
            <Button
              variant="contained"
              color="success"
              size="small"
              endIcon={<SendIcon />}
              onClick={onClickHandler}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      <TodoItems localValue={localValue} />
    </>
  );
}
const createTodo = (text, id) => {
  return {
    userId: id * 10,
    id: id,
    title: text,
    completed: false,
  };
};
