import React from "react";
import UserContainer from "./UserContainer";

export default function Navlinks() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#"> About </a>
        </li>
      </ul>
      <UserContainer />{" "}
    </div>
  );
}
