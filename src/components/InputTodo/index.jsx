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
import { addTodo } from "../../store/todos";

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
            addTodo({
              id: uuid.v4(),
              descr: value,
              checked: false,
            })
          );
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
