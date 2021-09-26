import React, { useState, useEffect } from "react";
import './App.css';
//Componentes
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';


function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoTittle, setTodoTittle] = useState('');
  const [filter, setFilter] = useState('all');


  const handleAddTodo = () => {
    if(todoTittle !== ''){
      if(!todoArray.some(item => item.title === todoTittle && !item.deleted)){
        setTodoArray([...todoArray, { title: todoTittle, status: false, deleted: false }]);
      }else{
        alert('El elemento ya se encuentra en la lista');
      }
      setTodoTittle("");
    }
  }

  const filterRender = () => {
    switch(filter){
      case 'pending':
        return todoArray.filter(task => !task.status);
      case 'completed':
        return todoArray.filter(task => task.status && !task.deleted);
      case 'deleted':
        return todoArray.filter(task => task.deleted);
      default:
        return todoArray.filter(task => !task.deleted);
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
    <div className="h-screen	bg-primary flex justify-center items-center flex-wrap ">
      <div className="w-full bg-blue400 mx-auto text-white px-10 py-10 rounded overflow-y-auto h-3/5 md:w-2/3 ">
        <div className="flex items-center">
          <img src="/img/task.png" alt="task" width="50px" height="50px"/>
          <h2 className="text-left font-bold text-3xl" >Todo list</h2>
        </div>
        <AddTodo
          todoTittle={todoTittle}
          setTodoTittle={setTodoTittle}
          handleAddTodo={handleAddTodo}
        />
          {/* children */}
          {
            todoArray?.length > 0 &&
              
            filterRender().map((task, index) => (
              <TodoItem
                task={task}
                setTodoArray={setTodoArray}
                todoArray={todoArray}
                key={index}
              />
            ))
          }
          {/* children */}
      </div>
      <div className="w-full flex bg-blue400 -mt-36 text-white px-5 py-5 rounded flex-wrap shadow-md md:w-2/3 ">
        <h2 className="text-left w-full font-bold text-3xl mb-5" >Filters</h2>
        <div className="w-full flex justify-between">
          <button className="btn btn-blue" onClick={() => setFilter('all')}>All task</button>
          <button className="btn btn-blue" onClick={() => setFilter('pending')}>Pending task</button>
          <button className="btn btn-blue" onClick={() => setFilter('completed')}>Complete task</button>
          <button className="btn btn-blue" onClick={() => setFilter('deleted')}>Deleted task</button>

        </div>
      </div>
    </div>
  );
}

export default App;
