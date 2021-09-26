import React from "react";

const TodoItem = ({task,setTodoArray,todoArray}) => {

  const completeOrDeleteTodo = () => {
    let index = todoArray.indexOf(task);
    if (task.status) {
      const deletedTodos = [...todoArray];
      deletedTodos[index].deleted = true
      setTodoArray(deletedTodos);
    } else {
      const updatedTodos = [...todoArray];
      updatedTodos[index].status = true;
      setTodoArray(updatedTodos);
    }
  };
  return (
    <div className="flex w-full mt-3 items-center">
      <p className={`w-3/4 ${task.status ? "line-through":""} py-2 px-3 mr-4 border-b-2`}>{task.title}</p>
      <button className={`btn btn-${task.status ? "red":"green"}  w-1/4`} type="button" onClick={completeOrDeleteTodo}>{task.status ? 'Delete':'Complete'}</button>
    </div>
  )
}

export default TodoItem;