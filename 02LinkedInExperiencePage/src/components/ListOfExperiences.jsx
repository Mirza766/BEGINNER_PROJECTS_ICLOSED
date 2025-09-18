{/* <h2>My Experiences</h2>
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
)}  */}
import React, { useContext, useState } from "react";
import ExperienceContext from "../context/ExperienceContext";
import { NavLink } from "react-router-dom";


function ListOfExperiences() {
  const { addExperience, UpdateExperience, DeleteExperience } = useContext(ExperienceContext);
  const [editTitle, setEditTitle] = useState("");
  const [editCompany, setEditCompany] = useState("");
  const [editEmployement, setEditEmployement] = useState("");
  const [editStartMonth, setEditStartMonth] = useState("");
  const [editEndMonth, setEditEndMonth] = useState("");
  const [editStartYear, setEditStartYear] = useState("");
  const [editEndYear, setEditEndYear] = useState("");
  const [editId, setEditId] = useState(null);
  const updatedata = (e) => {
     e.preventDefault();
    UpdateExperience(editId, {
      title: editTitle, employement: editEmployement, company: editCompany,
      startMonth: editStartMonth, startYear: editStartYear, endMonth: editEndMonth, endYear: editEndYear
    })
     Cancelling();
  }
  const Cancelling=()=>{
    setEditId(null)
    setEditTitle('')
    setEditCompany('')
    setEditEmployement('')
    setEditStartMonth('')
    setEditEndMonth('')
    setEditStartYear('')
    setEditEndYear('')
  }
  const editingExperience=(exp)=>{
    setEditId(exp.id)
    setEditTitle(exp.title)
    setEditCompany(exp.company)
    setEditEmployement(exp.employement)
    setEditStartMonth(exp.startMonth)
    setEditEndMonth(exp.endMonth)
    setEditStartYear(exp.startYear)
    setEditEndYear(exp.endYear)
  }
   const deletingExperience=(id)=>{
         DeleteExperience(id);
   }

console.log(addExperience)
  return (
    <div>

      <h2>My Experiences</h2>
      <ul>
        {addExperience.map((exp) => (
          <li key={exp.id}>
            {
              editId === exp.id ? (
                <form onSubmit={updatedata}>
                  <div>
                    <label>Title: </label>
                    <input type='text' value={editTitle} onChange={((e) => setEditTitle(e.target.value))} />
                    {"    "}
                    <label>Company: </label>
                    <input type='text' value={editCompany} onChange={((e) => setEditCompany(e.target.value))} />
                  </div>
                  <label>Employement Type</label>
                  <br />
                  <select value={editEmployement} onChange={((e)=>setEditEmployement(e.target.value))}>
                    <option>Please Select</option>
                    <option value='full-time'>Full-Time</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='intern'>Intern</option>
                  </select>
                  <br/>
                  <label>Start Date:  </label>
                  <select name='start-month' value={editStartMonth} onChange={((e)=>setEditStartMonth(e.target.value))} >
                    <option value=''>Month</option>
                    {['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <input type='number' name='startYear' placeholder="Year" value={editStartYear} onChange={((e)=>setEditStartYear(e.target.value))}/>
                  <br/>
                  <label>End Date*</label>
              <select
                name="endMonth"
                value={editEndMonth}
                onChange={((e)=>setEditEndMonth(e.target.value))}
              >
                <option value="">Month</option>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              
              <input
                type="number"
                name="endYear"
                placeholder="Year"
                value={editEndYear}
                onChange={((e)=>setEditEndYear(e.target.value))}
              />
               <br/>
               <button type='submit'>Update</button>
                <button onClick={Cancelling}>Cancel</button>
                </form>
              ) : (
                <>
               <NavLink to={`/experience/${exp.id}`}>
                 <h2>{exp.title}</h2>
                  </NavLink>
              <p>{exp.company} - {exp.employement}</p>
              <p>
                {exp.startMonth} {exp.startYear} -{" "}
                {exp.currentlyWorking ? "Present" : `${exp.endMonth} ${exp.endYear}`}
              </p>
              <button type="button" onClick={() => editingExperience(exp)}>Edit</button>
              <button type="button" onClick={() => deletingExperience(exp.id)}>Delete</button>
             
              </>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfExperiences;
