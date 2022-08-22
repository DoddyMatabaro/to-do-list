import React from 'react'
import TBody from './TBody'

function TableTasks({toDoList, setToDoList, setEditedTask }) {
  return (

    <table>
      <thead>
        <tr>
          <th colSpan="2">Task</th>
          <th colSpan="2">Status</th>
          <th colSpan="2">#</th>
          <th colSpan="2">#</th>
        </tr>
      </thead>
      < TBody toDoList={toDoList} setToDoList={setToDoList} setEditedTask={setEditedTask} />
      <tfoot>
      <tr>
          <th colSpan="2">Task</th>
          <th colSpan="2">Status</th>
          <th colSpan="2">#</th>
          <th colSpan="2">#</th>
        </tr>
      </tfoot>
    </table>
  );
  
}

export default TableTasks