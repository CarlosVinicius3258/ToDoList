import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import TodoList from './src/components/TodoList';


export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TodoList />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    
  },
});
