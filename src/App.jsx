import { useState } from 'react';
import './App.css'
import {datas} from './assets/data'
import Header from './Header'
import TableTasks from './TableTasks'
import ToDoForm from './ToDoForm'
function App() {

  const [data,setData]= useState(datas);
  const [editTask,setEditTask]=useState(null);

  return (
    <div className="App">
      <Header/>
      <ToDoForm toDoList={data} setToDoList={setData} editedTask={editTask}/>
      <TableTasks toDoList={data} setToDoList={setData} setEditedTask={setEditTask}/>
    </div>
  )
}

export default App
