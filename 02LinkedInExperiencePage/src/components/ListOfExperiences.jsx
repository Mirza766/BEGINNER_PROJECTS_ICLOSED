import React, { useContext } from "react";
import ExperienceContext from "../context/ExperienceContext";

function ListOfExperiences() {
  const { addExperience } = useContext(ExperienceContext);

  return (
    <div>
      <h2>My Experiences</h2>
      {addExperience.length === 0 ? (
        <p>No Experiences Added Yet</p>
      ) : (
        <ul>
          {addExperience.map((exp, index) => (
            <li key={index}>
              <h2>{exp.title}</h2>
              <p>{exp.company} - {exp.employement}</p>
              <p>
                {exp.startMonth} {exp.startYear} -{" "}
                {exp.currentlyWorking ? "Present" : `${exp.endMonth} ${exp.endYear}`}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListOfExperiences;
