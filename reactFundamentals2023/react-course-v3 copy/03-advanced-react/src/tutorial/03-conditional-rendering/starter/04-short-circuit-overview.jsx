import { useState } from "react";

// ||, if the first one is falsey than display the second one.
// &&, if the first arugment is a falsey than we display the first one.

// The && operator (logical AND) returns the first operand if it is a "falsey", or the second operand if it is a truthy
// The || operator (logical OR) returns the first operand if it is a "truthy", or the seocnd operand if the first operand "falsey"
// probably going to stick with the logical OR most of the time
const ShortCircuitOverview = () => {
  // falsey , implicity a false in boolean logic
  const [text, setText] = useState("");

  // truth, implicity a true in boolean logic
  const [name, setName] = useState("susan");

  return (
    <div>
      <h4>Falsy OR: {text || "hello world"}</h4>
      <h4>False AND: {text && "hello world"}</h4>
      <h4>Truthy OR: {name || "hello world"}</h4>
      <h4>Truthy AND: {name && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
