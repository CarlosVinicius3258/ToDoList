export default function reducer(state = [], action) {
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
}

export const addTodo = (newTodo) => {
  return { type: "ADD_TODO", item: newTodo };
  console.log(state);
};
export const removeTodo = (id) => {
  return { type: "DELETE_TODO", id };
  console.log(state);
};

export const updateTodo = (id, todos) => {
  const todoId = todos.filter((item) => item.id === id);
  return {
    type: "UPDATE_TODO",
    id: todoId[0].id,
  };
};
