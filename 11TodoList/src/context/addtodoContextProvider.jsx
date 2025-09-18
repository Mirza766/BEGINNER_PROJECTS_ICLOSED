import React, { useState } from "react";
import addtodoContext from "./addtodoContext";

const AddtodoContextProvider=(({children})=>{

   const [addtodo,setaddtodo]=useState([])
    const Addtodo=(data)=>{
      setaddtodo((prev)=>[...prev,{id:Date.now(),...data}])
    }
    const DeleteTodo=(id)=>{
        setaddtodo((prev)=>prev.filter((exp)=>exp.id!==id))
    }
    return (
        <addtodoContext.Provider value={{DeleteTodo,Addtodo,addtodo,setaddtodo}}>
        {children}
        </addtodoContext.Provider>
    )
})
export default AddtodoContextProvider