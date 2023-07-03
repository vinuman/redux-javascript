import store from "./store.js";
import { increment, decrement, reset } from "./actions/CounterActions.js";

console.log("initial state", store.getState());

store.subscribe(() => console.log("updated value", store.getState()));

store.dispatch(increment(10));
store.dispatch(increment(5));
store.dispatch(decrement(10));
store.dispatch(decrement(5));
store.dispatch(decrement(2));
store.dispatch(reset());
