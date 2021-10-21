import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputTodo from '../InputTodo'
import Todo from '../Todo'
const TodoList = () =>  {
    return (
        <View style={styles.container}>
            <InputTodo />
            <Todo />
            <Todo />
            <Todo />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 4
    }
})

export default TodoList;