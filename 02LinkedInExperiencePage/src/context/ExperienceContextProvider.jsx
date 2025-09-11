import React from "react";
import ExperienceContext from "./ExperienceContext";
import { useState } from "react";

const ExperienceContextProvider=({children})=>{
const [addExperice,setAddExperience]=useState([])
return(
<ExperienceContext.Provider value={{addExperice,setAddExperience}}>
{children}
</ExperienceContext.Provider>
)
}

export default ExperienceContextProvider