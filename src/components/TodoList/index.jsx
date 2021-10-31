import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import InputTodo from "../InputTodo";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo";
import { getAllTodos } from "../../store/fetchActions";
const TodoList = () => {
  const { todos } = useSelector((state) => state);
  console.log("todos: ", todos);
  const dispatch = useDispatch();
  const { showAddTodoMessage } = useSelector((state) => state.layout);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

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
