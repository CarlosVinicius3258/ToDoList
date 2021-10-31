import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./ducks/todos/index";
import layoutReducer from "./ducks/layout/index";

export default configureStore({
  reducer: { todos: todosReducer, layout: layoutReducer },
});
