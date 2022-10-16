import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import costumersReducer from "./costumersReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  costumers: costumersReducer,
});

export default rootReducer;
