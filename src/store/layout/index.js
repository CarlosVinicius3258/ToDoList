import { createAction, createReducer } from "@reduxjs/toolkit";

//Action Creators
export const showAddTodoMessage = createAction("SHOW_ADD_TODO_MESSAGE");
export const hideAddTodoMessage = createAction("HIDE_ADD_TODO_MESSAGE");

const INITIAL_STATE = {
  showAddTodoMessage: false,
};

//Reducer Function Creator
const layout = createReducer(INITIAL_STATE, {
  [showAddTodoMessage.type]: (state) => ({
    ...state,
    showAddTodoMessage: true,
  }),
  [hideAddTodoMessage.type]: (state) => ({
    ...state,
    showAddTodoMessage: false,
  }),
});

export default layout;
