import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import InputTodo from "../InputTodo";
import { useSelector } from "react-redux";
import Todo from "../Todo";
const TodoList = () => {
  const { todos } = useSelector((state) => state);
  const { showAddTodoMessage } = useSelector((state) => state.layout);
  return (
    <View style={styles.container}>
      {showAddTodoMessage && Alert.alert("Item Adicionado!")}
      <InputTodo />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            descr={todo.descr}
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
