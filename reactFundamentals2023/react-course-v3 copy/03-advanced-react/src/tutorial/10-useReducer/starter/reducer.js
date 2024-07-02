import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { useReducer } from "react";

// Think of useReducer as a light version of REDUX
// As your application grows inside itll become really hard to manage state with just useState
// useReducer is a state management tool.
// Problem with it is that it requires a lot of boiler plate code
// Its a middle ground between useState and REDUX
// You don't have to use this in your code, its just a tool that you can use.

// default state of the reducer
export const defaultState = {
  people: data,
  isLoading: false,
};

// reducer function, this is where we control the entire state
// state passed in is before the update
export const reducer = (state, action) => {
  console.log(action);
  const type = action.type;
  if (type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (type === RESET_LIST) {
    return { ...state, people: data };
  } else if (type === REMOVE_ITEM) {
    const filteredPeople = state.people.filter(
      (x) => x.id !== action.payload.id
    );
    return { ...state, people: filteredPeople };
  }

  throw new Error("INVALID ACTION.TYPE RECEIVED: " + type);
};
