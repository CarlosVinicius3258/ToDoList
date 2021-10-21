import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputTodo from '../InputTodo'
import Todo from '../Todo'
import {TodoListController} from './controller/TodoListController'
const TodoList = () =>  {
    
    const [todos, setTodos] = useState([])
    const [data,setData] = useState([])

    useEffect(() => {
        setTodos([...data])
    }, [data])
    console.log("todos: ", todos)
    return (
        <View style={styles.container}>
            <InputTodo data={data} setData={setData} />
            {todos.map(todo => {
                console.log
                return <Todo key={todo.id} id={todo.id} data={data} setData={setData} descr={todo.descr} checked={todo.checked}/>
            })}

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