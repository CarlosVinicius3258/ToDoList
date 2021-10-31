import api from "../../services/api";
import { addTodo, addTodos, updateTodo, removeTodo } from "../ducks/todos";

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

export const updateTodoFetch = (id) => {
  return async (dispatch) => {
    await api
      .put(`/todos/${id}`)
      .then((res) => dispatch(updateTodo(res.data.id)))
      .catch(console.log);
  };
};

export const removeTodoFetch = (id) => {
  return async (dispatch) => {
    await api
      .delete(`/todos/${id}`)
      .then((res) => {
        console.log("res: ", res.data);
        dispatch(removeTodo(res.data));
      })
      .catch(console.log);
  };
};
