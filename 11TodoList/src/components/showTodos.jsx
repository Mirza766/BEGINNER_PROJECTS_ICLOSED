import React from "react";
import addtodoContext from "../context/addtodoContext";
import { useContext } from "react";


function ListOfExperiences(){
   
   const {DeleteTodo,addtodo}=useContext(addtodoContext);
   
const Deletion=(id)=>{
    DeleteTodo(id);
}

    return (
       <div>
        <ul>
            {addtodo.map((todo)=>(
                <li key={todo.id}>
                  <div>
                    <input type='checkbox' onChange={()=>Deletion(todo.id)}/>
                    <label>{todo.todolist}</label>
                  </div>
                </li>
            ))}
        </ul>
       </div>
    )
}

export default ListOfExperiences
