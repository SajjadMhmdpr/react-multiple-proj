import React, { useState } from "react";

export default function useInputHook(init) {
  const [input, setInput] = useState(init);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const binding = {
    value: input,
    onChange: handleOnChange,
  };

  return [input, setInput, binding];
}
