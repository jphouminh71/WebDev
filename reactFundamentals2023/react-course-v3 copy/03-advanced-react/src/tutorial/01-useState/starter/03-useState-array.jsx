import { useState } from "react";
import { data } from "../../../data.js";

// Basic card for people items
// pass down the person and a function that can be called above.
const Card = (props) => {
  const handleClick = () => {
    props.requestDelete(props.name);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <button className="btn" onClick={handleClick}>
        {" "}
        remove{" "}
      </button>
    </div>
  );
};

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const deleteItem = (name) => {
    console.log("deleting: " + name);
    const filteredPeople = people.filter((x) => x.name !== name);
    setPeople(filteredPeople);
  };
  const cardElements = people.map((x) => (
    <Card {...x} key={x.id} requestDelete={deleteItem} />
  ));

  return (
    <div>
      <h1>UseState Array Example</h1>
      <div> {cardElements} </div>
    </div>
  );
};

export default UseStateArray;
