import { useState } from "react";

const people = [
  { name: "John", age: "24", hobby: "screaming at the computer" },
  { name: "Peter", age: "21", hobby: "reading books" },
];

const UseStateObject = () => {
  const peter = people[1];

  const [person, setPerson] = useState({
    name: peter.name,
    age: peter.age,
    hobby: peter.hobby,
  });

  const handleClick = () => {
    const john = people[0];
    setPerson(john);
  };

  const { name, age, hobby } = person;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button className="btn" onClick={handleClick}>
        {" "}
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
