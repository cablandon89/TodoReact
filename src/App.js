import React, { useState, useEffect } from "react";
import './App.css';
//Componentes
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';


function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoTittle, setTodoTittle] = useState('');

  const handleAddTodo = () => {
    if(todoTittle != ''){
      setTodoArray([...todoArray, { title: todoTittle, status: false }]);
      setTodoTittle("");
    }
    
  }
  useEffect(() =>{
    if(JSON.parse(localStorage.getItem('todoList'))){
      setTodoArray(JSON.parse(localStorage.getItem('todoList')))
    }else{
      setTodoArray(localStorage.setItem("todoList",JSON.stringify([])))
    }
  },[]);

  useEffect(() =>{
    localStorage.setItem("todoList",JSON.stringify(todoArray));
  },[todoArray])

  return (
    <div className="h-screen	bg-primary flex justify-center items-center ">
      <div className="w-full bg-blue400 mx-auto text-white px-10 py-10 rounded md:w-1/2">
        <h2 className="text-left font-bold text-3xl" >Todo list</h2>
        <AddTodo
          todoTittle={todoTittle}
          setTodoTittle={setTodoTittle}
          handleAddTodo={handleAddTodo}
        />

          {/* children */}
          {
            todoArray?.length > 0 &&
            todoArray.map((task, index) => (
              <TodoItem
                title={task.title}
                status={task.status}
                setTodoArray={setTodoArray}
                index={index}
                todoArray={todoArray}
                key={index}
              />
            ))
          }
          {/* children */}
      </div>
    </div>
  );
}

export default App;
