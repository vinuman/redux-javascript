import { createStore } from "redux";
import counterReducer from "./actions/reducers/counterReducer.js";

const store = createStore(counterReducer);

export default store;
