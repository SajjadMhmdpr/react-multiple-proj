import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export default function Clock() {
  const [secound, setSecound] = useState(55);
  const [minuts, setMinuts] = useState(0);

  const secoundRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const minutsRef = useRef(0);
  const [stateForTick, setStateForTick] = useState(true);

  //---------------------------------------------------------------------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setSecound((prev) => (prev + 1 >= 60 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    //console.log("secound state change : ", Date.now());

    if (secound === 0) setMinuts((prev) => (prev + 1 >= 60 ? 0 : prev + 1));
  }, [secound]);
  //---------------------------------------------------------------------------------------

  useEffect(() => {
    inputRef.current?.focus();

    const timer = setInterval(() => {
      //console.log("interval : ", secoundRef.current);
      secoundRef.current++;
      setStateForTick((prev) => (prev ? false : true));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const hendleChangeRef = () => {
    console.log("hendleChangeRef : ", inputRef.current?.value);

    if (inputRef.current) {
      inputRef.current.value = "5";
    }
  };
  return (
    <>
      <Box
        sx={{
          mt: 10,
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: 200,
            p: 4,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <label>with state:</label>
          <h1>{minuts + ":" + secound + ":" + 0}</h1>
          <hr />
          <label>with ref:</label>
          <h1>{minutsRef.current + ":" + secoundRef.current + ":" + 0}</h1>
          <hr />
          <input ref={inputRef} type="number" />
          <button style={{ marginTop: 10 }} onClick={hendleChangeRef}>
            change ref ...
          </button>
        </Paper>
      </Box>
    </>
  );
}
