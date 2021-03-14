import { combineReducers } from "redux";
import reducers1 from "./reducers1";
import reducers2 from "./reducers2";
import listReducer from "../../view/login/reducer";

export const rootReducer = combineReducers({
  reducers1,
  reducers2,
  listReducer,
});
