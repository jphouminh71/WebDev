import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleIncrementClick}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
