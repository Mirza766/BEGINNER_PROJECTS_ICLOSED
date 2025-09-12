import React from "react";
import ExperienceContext from "./ExperienceContext";
import { useState } from "react";

const ExperienceContextProvider=({children})=>{
const [addExperience,setAddExperience]=useState([])
return(
<ExperienceContext.Provider value={{addExperience,setAddExperience}}>
{children}
</ExperienceContext.Provider>
)
}

export default ExperienceContextProvider