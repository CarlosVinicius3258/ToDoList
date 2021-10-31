import { createAction, createReducer } from "@reduxjs/toolkit";

//Action Creator
export const addTodo = createAction("ADD_TODO");
export const addTodos = createAction("ADD_TODOS");
export const updateTodo = createAction("UPDATE_TODO");
export const removeTodo = createAction("REMOVE_TODO");

//Reducer Creator
const reducer = createReducer([], {
  //addTodo Handler
  [addTodo.type]: (state, action) => {
    state.push(action.payload);
  },
  [addTodos.type]: (state, action) => state.push([...action.payload]),

  //updateTodo

  [updateTodo.type]: (state, action) => {
    const newArray = state.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });
    return [...newArray];
  },

  //removeTodo Handler
  [removeTodo.type]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});

export default reducer;
