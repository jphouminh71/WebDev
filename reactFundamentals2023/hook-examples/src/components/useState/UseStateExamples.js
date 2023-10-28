import "./UseStateExamples.css";
import "./SimpleExample";
import SimpleExample from "./SimpleExample";
import FormExample from "./FormExample";

function SingleUseState() {
  return (
    <div className="main-container">
      <SimpleExample />
      <FormExample />
    </div>
  );
}

export default SingleUseState;
