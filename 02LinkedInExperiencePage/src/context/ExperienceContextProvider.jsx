import React from "react";
import ExperienceContext from "./ExperienceContext";
import { useState } from "react";

const ExperienceContextProvider=({children})=>{
const [addExperience,setAddExperience]=useState([])
const AddExperience=(data)=>{
    setAddExperience((prev)=>[...prev,{id:Date.now(),...data}])
}
const UpdateExperience=(id,data)=>{
    setAddExperience((prev)=>prev.map((experience)=>(
               experience.id===id?{...experience,...data}:experience
    )))
}
const DeleteExperience=(id)=>{
    setAddExperience((prev)=>prev.filter((exp)=>exp.id!==id))
}
return(
<ExperienceContext.Provider value={{addExperience,setAddExperience,AddExperience,UpdateExperience,DeleteExperience}}>
{children}
</ExperienceContext.Provider>
)
}

export default ExperienceContextProvider