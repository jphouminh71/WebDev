import React, { useState, createContext } from "react";
import Navlinks from "./Navlinks";
import { useContext } from "react";

// Invoke the Create context in the PARENT component.

export const NavbarContext = createContext(); // returns back an object essentially acting as a container, main interest is the .provider

// customHook
export const useAppContext = () => {
  return useContext(NavbarContext);
};

export default function Navbar() {
  const [user, setUser] = useState({ name: "Jonathan" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      {" "}
      // Any descendant can access this provider storage
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
}
