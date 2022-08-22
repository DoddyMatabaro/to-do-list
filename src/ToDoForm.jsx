import React from 'react'
import { useState } from 'react'

const ToDoForm = ({toDoList,settoDoList,editTask}) => {
	const [task, settask] = useState("")
	const [statut, setstatus] = useState("")
	const submitTask = () => {
		task = editTask === null ? settoDoList(toDoList) : editTask(task[toDoList.indexOf(task)])
		statut= editTask === null ? settoDoList(toDoList) :  editTask(task[toDoList.indexOf(statut)])
	}
  return (
	<div>
		  <h4></h4>
	</div>
  )
}

export default ToDoForm
