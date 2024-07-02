import React from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
  const [name, setName] = useState("peter");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children} // not sure why we need this tbh.
    </GlobalContext.Provider>
  );
}
