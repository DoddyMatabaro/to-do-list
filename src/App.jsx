import { useState } from 'react';
import './App.css'
import Header from Header
import TodoList from './TableTasks'

function App() {

  const [data,setData]= useState([]);
  const [editTask,setTask]=useState(null);

  function editedTask(index){
    return setTask(index)
  }
  return (
    <div className="App">
      <Header/>
      <TableTasks />

    </div>
  )
}

export default App
