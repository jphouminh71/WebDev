import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/AmazonMimic/amazonStyles.css";
import BookList from "./components/AmazonMimic/BookList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList className="booklist" />
  </React.StrictMode>
);
