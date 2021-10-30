import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import TodoList from "./src/components/TodoList";
import { Provider } from "react-redux";
import store from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <TodoList />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
