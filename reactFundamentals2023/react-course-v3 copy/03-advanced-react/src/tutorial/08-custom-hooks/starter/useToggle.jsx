import { useState } from "react";

// defining our own hook
export const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };

  return { show, toggle }; // passing the client back a state, and the function to toggle
};
