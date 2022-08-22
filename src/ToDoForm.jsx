import React from 'react'
import { useState } from 'react'

const ToDoForm = ({ toDoList, settoDoList, editTask }) => {
	const [task, settask] = useState("")
	const [status, setstatus] = useState("")
	const submitTask = (e) => {
		e.preventDefault()
		editTask === null ? settoDoList([...toDoList, { task: task, status: status }]) : settoDoList((items) => {
			return items[editTask]
		})
	}
  return (
	<div>
		  <form  onSubmit={submitTask}>
			  <input type="text" placeholder='enter task' value={task} onChange={(e)=>settask(e.target.value)}/> 
			  <select name="" value={status} id="" onChange={(e)=>setstatus(e.target.value)}>
				   <option value="In progress">In progress</option>
				   <option value="To do">To Do</option>
				   <option value="Ended">Ended</option>
			  </select>
			  <input type="submit" value="ajouter" />
		  </form>
	</div>
  )
}

export default ToDoForm
