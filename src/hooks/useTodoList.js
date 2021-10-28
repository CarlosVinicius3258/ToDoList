import { useReducer } from "react";
// import { Container } from './styles';
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.item];
    case "UPDATE_TODO":
      const newArray = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      });
      return [...newArray];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", item: newTodo });
    console.log(state);
  };
  const removeTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
    console.log(state);
  };

  const updateTodo = (id) => {
    const todoId = state.filter((item) => item.id === id);
    dispatch({
      type: "UPDATE_TODO",
      id: todoId[0].id,
    });
    console.log(state, addTodo);
  };

  return { state, addTodo, removeTodo, updateTodo };
};
