import { useState } from 'react';
import './App.css'
import Header from Header
function App() {

  const [data,setData]= useState([]);
  const [editTask,setTask]=useState(null);

  function editedTask(index){
    return setTask(index)
  }
  return (
    <div className="App">
      <Header/>
      <ToDoForm toDoList={toDoList} setToDoList={setToDoList} editedTask={editedTask}/>
      
    </div>
  )
}

export default App
