import { combineReducers } from "redux";
import { reducer  } from "./reducer"; // Ensure correct import

const rootReducer = combineReducers({
  quiz: reducer, 
});

export default rootReducer;
