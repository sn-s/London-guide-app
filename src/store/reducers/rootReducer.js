import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import legendReducer from "./legendReducer";

export default combineReducers({
  filterReducer,
  legendReducer
});