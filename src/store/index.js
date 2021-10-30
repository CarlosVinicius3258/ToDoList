import { createStore, combineReducers } from "redux";
import todosReducer from "./todos";
import layoutReducer from "./layout";

const rootReducer = combineReducers({
  todos: todosReducer,
  layout: layoutReducer,
});

export default createStore(rootReducer);
