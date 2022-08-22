import { useState } from 'react';
import './App.css'
import datas from '../assets/data'
import Header from './Header'
import TableTasks from './TableTasks'
function App() {

  const [data,setData]= useState(datas);
  const [editTask,setTask]=useState(null);


  function editedTask(index){
    return setTask(index)
  }
  return (
    <div className="App">
      <Header/>
      <ToDoForm toDoList={data} setToDoList={setData} editedTask={editedTask}/>
      <TableTasks toDoList={data} setToDoList={setData} setEditedTask={setTask}/>
    </div>
  )
}

export default App
