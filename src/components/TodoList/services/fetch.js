import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Todo from '../../Todo'

const Todos = [
    {
        id: 1,
        descr: 'Primeiro Todo',
        checked: false 
    },
    {
        id: 2,
        descr: 'Segundo Todo',
        checked: true 
    },
    {
        id: 3,
        descr: 'Terceiro Todo',
        checked: true 
    },
    
]

const fetchTodos = () => {
    const [todoArray, setTodoArray] = useState([])
    const createTodoItem = (id, descr, checked) => {
        const newTodo = {
            id,
            descr,
            checked,
        }
        Todos.push(newTodo);
    }
    useEffect(() => {
            const getTodos = () =>{
                setTodoArray([...Todos]);
                
            }
            console.log("fetch: ", todoArray)
            getTodos()
        
    }, [todoArray])
    
    const url = 'URLLL'

    return {todoArray, createTodoItem, url}
}

export default fetchTodos;
