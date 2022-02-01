import { combineReducers } from "redux";

import CountersReducer from "./counters";
import ListReducer from "./list";

export default combineReducers({
  counters: CountersReducer,
  lists: ListReducer,
});
