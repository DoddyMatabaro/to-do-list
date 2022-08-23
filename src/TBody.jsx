import React from 'react';
import {FaPen, FaTrash} from 'react-icons/fa'



function TBody ({toDoList, setToDoList,setEditedTask}) {
    
    function deleteTask(index) {
         const newToDoList = [...toDoList] 
         newToDoList.splice(index, 1)
         return  setToDoList(newToDoList); 

    };

    let listeTaches = toDoList.map((toDo, idx) => {
        return <tr key={idx.toString()}>  
            <td>{toDo.task} </td>
            <td>{toDo.status} </td>
            <td><FaPen onClick={()=>setEditedTask(idx)}/></td>
            <td><FaTrash onClick={()=>deleteTask(idx)}/></td>
        </tr>           
      });

    return(
        <tbody>
            {listeTaches}
        </tbody>
        
    );
    
}
export default TBody;
