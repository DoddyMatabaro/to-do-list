import React from 'react'
import { useState } from 'react'

const ToDoForm = (props) => {
	const [toDoList,settoDoList] = useState([])
  return (
	<div>
		  <h4>{props.toDoList}</h4>
	</div>
  )
}

export default ToDoForm
