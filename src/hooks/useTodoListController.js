import useTodoList from "./useTodoList";

const useTodoListController = () => {
  const { state, addTodo, removeTodo, updateTodo } = useTodoList();

  console.log("controller: ", state);
  return (getController = {
    state,
    addTodo,
    removeTodo,
    updateTodo,
  });
};

export default useTodoListController;
