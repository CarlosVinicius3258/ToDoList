import React, { useEffect, useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import InputTodo from "../InputTodo";
import { useSelector } from "react-redux";
import Todo from "../Todo";
const TodoList = () => {
  const { todos } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <InputTodo />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            descr={todo.descr}
            checked={todo.checked}
            todos={todos}
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
