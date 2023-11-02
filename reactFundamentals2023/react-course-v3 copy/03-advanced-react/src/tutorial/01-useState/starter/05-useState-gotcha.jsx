import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prev) => {
      const newValue = prev + 1;
      console.log(newValue);
      return newValue;
    });
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h1> {value}</h1>
      <button className="btn" onClick={handleClick}>
        {" "}
        increment{" "}
      </button>
    </div>
  );
};

export default UseStateGotcha;
