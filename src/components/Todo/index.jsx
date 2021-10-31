import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../store/ducks/todos";

const Todo = (props) => {
  const { descr, checked, id } = props;
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.descrContainer}
          onPress={() => {
            dispatch(updateTodo(id));
          }}
        >
          <Text style={!checked ? styles.descr : styles.descrChecked}>
            {descr}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.deleteContainer}
          onPress={() => {
            dispatch(removeTodo(id));
          }}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    padding: 10,
  },
  descrContainer: {
    width: "80%",
  },
  descr: {
    marginLeft: 5,
    textAlign: "justify",
    flexWrap: "wrap",
    fontSize: 15,
  },
  descrChecked: {
    marginLeft: 5,
    textAlign: "justify",
    textDecorationLine: "line-through",
  },
  deleteContainer: {
    width: "20%",
  },
  deleteText: {
    textAlign: "center",
    paddingTop: 5,
    color: "red",
    fontSize: 20,
  },
  line: {
    marginTop: 3,
    borderWidth: 0.3,
    borderColor: "gray",
  },
});
