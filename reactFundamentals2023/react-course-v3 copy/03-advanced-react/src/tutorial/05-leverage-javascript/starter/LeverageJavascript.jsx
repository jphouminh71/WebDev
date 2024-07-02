import Person from "./Person.jsx";
import { people } from "../../../data.js";

const LeverageJavascript = () => {
  return (
    <div>
      <h2> Leverage Javascript</h2>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};

export default LeverageJavascript;
