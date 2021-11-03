import { useState } from "react";

export const useInputState = (initialState) => {
  const [value, setValue] = useState(initialState);
  const handleChange = (evnt) => {
    setValue(evnt.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
