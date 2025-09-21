import React, { useContext, useState } from "react";
import addtodoContext from "../context/addtodoContext";

function AddingTodo(){
    const {Addtodo}=useContext(addtodoContext);
  const [todolist,settodolist]=useState("");

  const onSubmission=(e)=>{
       e.preventDefault();
       Addtodo({todolist});
       settodolist('')
  }


    return (
<form onSubmit={onSubmission}>
    <h1>Todo List App</h1>
    <input placeholder="Add your todo here" value={todolist} onChange={(e)=>settodolist(e.target.value)}/>
    <button type='submit'>Add Todo</button>
</form>
    )
}
export default AddingTodo
