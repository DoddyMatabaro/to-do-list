import { useState } from "react";
import React from "react";

function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todos=>{
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
          }
      
          const newTodos = [todo, ...todos];
       
          setTodos(newTodos);
          console.log(...todos);

    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };


  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
    

    




}
export default TodoList