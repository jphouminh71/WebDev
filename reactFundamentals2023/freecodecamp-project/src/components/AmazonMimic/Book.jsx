import React from "react";
import "./amazonStyles.css";

function Book(props) {
  const { author, title, imgPath, id, bookIdx, getBook } = props;

  // wrapper method so we don't immediately invoke
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={imgPath} alt="present placeholder" />
      <button onClick={getSingleBook}> display title </button>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <h1 className="number"> #{bookIdx + 1} </h1>
    </article>
  );
}

export default Book;
