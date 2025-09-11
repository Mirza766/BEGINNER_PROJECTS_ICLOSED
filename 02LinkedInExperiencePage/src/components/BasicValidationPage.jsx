import React, { useContext } from "react";
import ExperienceContext from "../context/ExperienceContext";

function BasicValidationPage(){

    const {addExperience}=useContext(ExperienceContext);

    return <div>{addExperience.employement}</div>


}

export default BasicValidationPage