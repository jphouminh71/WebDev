import { useState } from "react";
import { useToggle } from "./useToggle";

/*  Custom Hooks 
  - same rules as regular hooks
  - simplifiy component (less code)
  - re-use functionality 
*/
const ToggleExample = () => {
  const {show, toggle} = useToggle(true);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
