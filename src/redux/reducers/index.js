import { combineReducers } from "redux";

import CounterReducer from "./counter";
import ListReducer from "./list";

export default combineReducers({
  counter: CounterReducer,
  lists: ListReducer,
});
