import React, { useEffect, useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import InputTodo from "../InputTodo";
import Todo from "../Todo";
import useTodoListController from "../../hooks/useTodoListController";
const TodoList = () => {
  const { state, addTodo, removeTodo, updateTodo } = useTodoListController();
  console.log(state);
  return (
    <View style={styles.container}>
      <InputTodo addTodo={addTodo} />
      {state.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            state={state}
            descr={todo.descr}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            checked={todo.checked}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 4,
  },
});

export default TodoList;
