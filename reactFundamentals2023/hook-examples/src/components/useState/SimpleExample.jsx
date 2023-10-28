import React from "react";
import { useState } from "react";

export default function SimpleExample() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <section className="card-container">
      <h1> Single variable </h1>
      <h2> {count} </h2>
      <button onClick={handleClick}> Increment Counter </button>
    </section>
  );
}
