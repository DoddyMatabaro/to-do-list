import React from 'react'
import { useState } from 'react'

const ToDoForm = ({toDoList,settoDoList,editTask}) => {
	const [task, settask] = useState("")
	const [status, setstatus] = useState("")
	const submitTask = () => {
		editTask === null ? settoDoList([...toDoList, { task: task, status: status }]) : settoDoList((items) => {
			return items[editTask]
		})
	}
  return (
	<div>
		  <h4>task</h4>
		  <h4>statut</h4>
	</div>
  )
}

export default ToDoForm
