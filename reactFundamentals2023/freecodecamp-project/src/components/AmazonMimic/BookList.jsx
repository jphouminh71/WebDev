// Now these are all server rendered.
import Book from "./Book";
import React from "react";
import allBooks from "./exampleBooks";
import "./amazonStyles.css";

function BookList() {
  const getBookById = (givenId) => {
    console.log("finding book for givenId: " + givenId);
    const book = allBooks.find((book) => book.id === givenId);
    console.log(book);
  };

  const bookElements = allBooks.map((currBook, idx) => (
    <Book {...currBook} key={currBook.id} getBook={getBookById} bookIdx={idx} />
  ));

  return (
    <div>
      <h1 className="title"> Amazon Best Sellers </h1>
      <section className="booklist">{bookElements}</section>;
    </div>
  );
}

export default BookList;
