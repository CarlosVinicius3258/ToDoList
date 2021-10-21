import fetchTodos from "../services/fetch";
export const TodoListController = () =>{
    const {createTodoItem, todoArray,url} = fetchTodos();

     return {
         getController : {
            createTodoItem,
            todoArray,
            url
        }   
    }
}
