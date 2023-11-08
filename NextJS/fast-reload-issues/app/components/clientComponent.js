"use client";

import { useState } from "react";

const clientComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={handleClick}> SetCount </button>
    </div>
  );
};

export default clientComponent;
