import React from 'react';
import {FaPen, FaTrash} from 'react-icons/fa'



function TBody ({toDoList, setToDoList,setEditedTask}) {
    
    function deleteTask(index) {
      toDoList.splice(index, 1)
        return setToDoList(toDoList) 
        
    };

    let listeTaches = toDoList.map(toDo, idx => {
        return <tr>  
            <td>{toDo.task} </td>
            <td>{toDo.status} </td>
            <td><FaPen/></td>
            <td><FaTrash onClick={()=>deleteTask(idx)}/></td>
        </tr>;
           
      });

    return(
        <tbody>
            {listeTaches}
        </tbody>
        
    );
    
}
export default TBody;
