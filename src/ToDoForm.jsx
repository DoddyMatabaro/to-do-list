import React from 'react'
import { useState } from 'react'

const ToDoForm = ({ toDoList, setToDoList, editedTask }) => {
	const [task, settask] = useState("")
	const [status, setstatus] = useState("")
	function submitTask(){
        if(task.length === 0 || status.length===0) return;
		const newToDoList = [...toDoList];

        if(editedTask === null){
                    newToDoList.push(
                        {
                            task:task,
                            status: status
                        }
                    )
                setToDoList(newToDoList);
                setTask('');
                setStatus('');                
        }else{
			console.log(editedTask);
            newToDoList[editedTask].task = task;
            newToDoList[editedTask].statut = status;
			setToDoList(newToDoList);
            setEditedTask = null;
        }
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
			  <input 
			  		type="submit"
					onClick={(e)=>{
							e.preventDefault();
							submitTask();
					}} 
					value="Submit" 
				/>
		  </form>
	</div>
  )
}

export default ToDoForm
