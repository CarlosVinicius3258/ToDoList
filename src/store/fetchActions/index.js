import api from "../../services/api";
import { addTodos } from "../ducks/todos";
import { addTodo } from "../ducks/todos";
export const getAllTodos = () => {
  return async (dispatch) => {
    await api
      .get("/todos")
      .then((res) => {
        console.log("api: ", res.data);
        dispatch(addTodos(res.data));
      })
      .catch(console.log);
  };
};

export const addTodoFetch = (todo) => {
  return async (dispatch) => {
    await api
      .post("/todos", todo)
      .then((res) => dispatch(addTodo(res.data)))
      .catch(console.log);
  };
};
