import React from 'react';
import {FaPen, FaTrash} from 'react-icons/fa'



function TBody ({toDoList, setToDoList,setEditedTask}) {
    
    function deleteTask(index) {
       if(toDoList.splice(index, 1)){
           let newTab = toDoList
           setToDoList(newTab);
              console.log(toDoList.length);
       }
        
    };

    let listeTaches = toDoList.map((toDo, idx) => {
        return <tr key={idx.toString()}>  
            <td>{toDo.task} </td>
            <td>{toDo.status} </td>
            <td><FaPen/></td>
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
