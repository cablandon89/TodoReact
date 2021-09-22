import React from "react";

const TodoItem = ({title,status,setTodoArray,index,todoArray}) => {
  const completeOrDeleteTodo = () => {
    if (status) {
      const deletedTodos = [...todoArray];
      deletedTodos.splice(index, 1);
      setTodoArray(deletedTodos);
    } else {
      const updatedTodos = [...todoArray];
      updatedTodos[index].status = true;
      setTodoArray(updatedTodos);
    }
  };
  return (
    <div className="flex mb-4 mt-2 items-center">
      <p className={`w-full ${status ? "line-through":""}`}>{title}</p>
      <button className={`btn btn-${status ? "red":"green"} py-2 px-2`} type="button" onClick={completeOrDeleteTodo}>{status ? 'Borrar':'Completar'}</button>
    </div>
  )
}

export default TodoItem;