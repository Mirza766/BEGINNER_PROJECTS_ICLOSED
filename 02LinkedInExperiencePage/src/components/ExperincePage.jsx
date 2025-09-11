import React, { useContext } from "react";
import ExperienceContext from "../context/ExperienceContext";
import { useState } from "react";



function ExperiencePage(){

const [formData,setFormData]=useState({
title:'',
employement:'',
company:'',
startMonth:'',
startYear:'',
endMonth:'',
endYear:'',
currentlyWorking: false,
});

const {setAddExperience}=useContext(ExperienceContext)
//const [title,setTitle]=useState('');
//const [employement,setEmployement]=useState('')
//const [company,setCompany]=useState('')




const onSubmission=(e)=>{
    e.preventDefault();

    if (!formData.title || !formData.company  || !formData.endMonth  || !formData.startMonth || !formData.endYear || !formData.startYear){
        alert('These are the required Fields ');
        return
    }
    setAddExperience((prev) => [...prev,formData]);
}

const titleWrite = (e) => {
  const value = e.target.value;
  //setTitle(value);
  setFormData((prev) => ({...prev,title: value}));
};
const employeeWrite = (e) => {
  const value = e.target.value;
  //setEmployement(value);
  setFormData((prev) => ({...prev,employement: value}));
};

const companyeWrite = (e) => {
  const value = e.target.value;
  //setCompany(value);
  setFormData((prev) => ({...prev,company: value}));
};

const checkWorking = (e) => {
  const isChecked = e.target.checked;
  setFormData((prev) => ({
    ...prev,
    currentlyWorking: isChecked, 
  }));
};

const startMontheWrite = (e) => {
  const value = e.target.value;
  //setCompany(value);
  setFormData((prev) => ({...prev,startMonth: value}));
};

const startYearWrite = (e) => {
  const value = e.target.value;
  //setCompany(value);
  setFormData((prev) => ({...prev,startYear: value}));
};

const endMonthWrite = (e) => {
  const value = e.target.value;
  //setCompany(value);
  setFormData((prev) => ({...prev,endMonth: value}));
};

const endYearWrite = (e) => {
  const value = e.target.value;
  //setCompany(value);
  setFormData((prev) => ({...prev,endYear: value}));
};



return (
<div>
    <form onSubmit={onSubmission}>
    <div>
<label name='Title'>Title*</label>
<br/>
<input placeholder='Ex. Retail Sales Manager' value={formData.title} onChange={titleWrite}/>
</div>
<div>
<label>Employement Type</label>
<br/>
<select name='employement-type' value={formData.employement} onChange={employeeWrite}>
    <option>Please Select</option>
    <option value='full-time'>Full-Time</option>
    <option value='part-time'>Part-Time</option>
    <option value='intern'>Intern</option>
</select>
</div>
<div>
  <label>Company*</label>
  <br/>
<input type='text' name='company' placeholder='Ex: Microsoft' value={formData.company} onChange={companyeWrite}/>
</div>
<div>

<input type='checkbox' name='CurrentlyWorking'  onChange={checkWorking} checked={formData.currentlyWorking}/>
<label>I am Currently Working Here</label>
</div>
<div>
    <label>Start Date</label>
    <br/>
    <select type='text' name='start-date' value={formData.startMonth} onChange={startMontheWrite}  >
        <option value=''>Month</option>
        {['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'].map((m)=>(
            <option key={m} value={m}>{m}</option>
        ))}
    </select>
    <input type='number' name='startYear' placeholder="Year" value={formData.startYear} onChange={startYearWrite}/>
</div>

 {!formData.currentlyWorking && (
            <div>
              <label className="block font-semibold">End Date*</label>
              <br/>
              <select
                name="endMonth"
                className="w-full p-2 border rounded"
                value={formData.endMonth}
                onChange={endMonthWrite}
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
                className="w-full p-2 border rounded mt-2"
                value={formData.endYear}
                onChange={endYearWrite}
              />
            </div>
          )}
          <button type='submit'>
           Save
          </button>
          </form>
</div>
)
}
export default ExperiencePage

