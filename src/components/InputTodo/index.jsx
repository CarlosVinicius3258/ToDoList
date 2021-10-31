import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import {
  showAddTodoMessage,
  hideAddTodoMessage,
} from "../../store/ducks/layout";
import { addTodoFetch } from "../../store/fetchActions";

const InputTodo = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleTextChange = (value) => {
    setValue(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(value) => handleTextChange(value)}
      />
      <TouchableHighlight
        style={styles.add}
        onPress={() => {
          dispatch(
            addTodoFetch({
              id: uuid.v4(),
              descr: value,
              checked: false,
            })
          );
          dispatch(showAddTodoMessage());
          setTimeout(() => {
            dispatch(hideAddTodoMessage());
          }, 1000);
          setValue("");
        }}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

export default InputTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginVertical: 10,
    width: "100%",
    padding: 10,
  },
  add: {
    flex: 1,
    width: "20%",
    paddingHorizontal: 8,
  },
  addText: {
    fontSize: 40,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    width: "80%",
    paddingLeft: 8,
  },
});
