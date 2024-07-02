import { React, useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { reducer } from "./reducer";
import { defaultState } from "./reducer";

const ReducerBasics = () => {
  // accepts reducer function, something to alter the state,
  // and a inital state
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetItems = () => {
    dispatch({ type: RESET_LIST });
  };

  const peopleCount = state.people.length;
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {peopleCount > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
