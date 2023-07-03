import { INCREMENT, DECREMENT, RESET } from "../actionTypes.js";

let initialState = 0;

const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return state + actions.payload;
    case DECREMENT:
      return state - actions.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
