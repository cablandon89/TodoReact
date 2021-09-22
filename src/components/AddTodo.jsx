import React from "react";
import '../styles/Components.css';

const AddTodo = ({ todoTittle, setTodoTittle, handleAddTodo }) => {
  return (
    <div className="flex w-full mt-5">
      <input type="text" className="shadow-md appearance-none rounded w-3/4 py-2 px-3 mr-4 text-black" placeholder="Add Todo" onChange={e => setTodoTittle(e.target.value)} value={todoTittle}/>
      <button className="btn btn-blue w-1/4" onClick={handleAddTodo}>Agregar +</button>
    </div>
  )
}

export default AddTodo;