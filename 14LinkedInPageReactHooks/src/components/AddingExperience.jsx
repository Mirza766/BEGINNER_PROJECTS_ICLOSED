import React, { useContext,useEffect } from 'react'
import ExperienceContext from '../context/ExperienceContext'
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {useNavigate} from "react-router-dom"



const AddingExperience = () => {

  const { AddExperience } = useContext(ExperienceContext);

  const form = useForm({
    defaultValues: {
      title: '',
      employement: '',
      company: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      currentlyWorking: false,
    },
    mode:'onChange'
  })

const navigate=useNavigate();


  const { control, handleSubmit, formState, register,reset,trigger,watch,getValues,setValue } = form
  const { errors,isSubmitSuccessful,isDirty,isSubmitting,isValid } = formState;

console.log("States Status: ",{isSubmitting,isSubmitSuccessful,isDirty,isValid})
const onSubmit=(data)=>{
  AddExperience(data);
  
reset();
  navigate("/experience");
   console.log(data);
}


useEffect(()=>{
  if (isSubmitSuccessful )
  reset();
},[isSubmitSuccessful])


const handleGetValues=()=>{
  console.log("Get Values: ",getValues("company"))
}

const handleSetValues=()=>{
  setValue("company","iclosed",{
    shouldDirty:true,
    shouldValidate:true,
    shouldTouch:true
  })
}



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Add Experience</h1>
        <div>
          <label name='title'>Title</label>
          <br />
          <input type='text' placeholder='Enter the Title' {...register('title', {
            required: 'Title is required',
            validate:{
              checktitle:(FieldValue)=>{
                return(
                  !FieldValue.endsWith("Estimation")|| "Invalid Title name"
                )
              },
              crossCheck:async(fieldValue)=>{
               const response=await fetch(`https://jsonplaceholder.typicode.com/users?username=${fieldValue}`);
               const data=await response.json();
               return data.length==0 || "Invalid Title"
              }
            }
          })} />
          <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.title?.message}</p>
        </div>
        <div>
          <label name='employementType'>Employement Type</label>
          <br />
          <select name='employement-type' {...register('employement')}>
            <option value='Full-Time'>Full-Time</option>
            <option value='Part-Time'>Part-Time</option>
            <option value='Intern'>Intern</option>
          </select>
          <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.employement?.message}</p>
        </div>
        <div>
          <label name='company'>Company or Organization</label>
          <br/>
          <input type='text' placeholder='Enter the Company' {...register('company',{disabled:watch('title')===""
          } ,{
            required: "Company name is required"
          })} />
          <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.company?.message}</p>

        </div>
        <div>

<input type='checkbox' name='CurrentlyWorking' {...register('currentlyWorking')}/>
<label>I am Currently Working Here</label>
</div>
<div>
    <label>Start Date</label>
    <br/>
    <select type='text' name='start-date' {...register('startMonth',{
      required:"Start Month"
    })} >
        <option value=''>Month</option>
        {['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'].map((m)=>(
            <option key={m} value={m}>{m}</option>
        ))}
    </select>
    <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.startMonth?.message}</p>
    <input type='number' name='startYear' placeholder="Year" {...register('startYear',{
      required:"Start Year is Required"
    })}/>
    <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.startYear?.message}</p>
</div>

            <div>
              <label>End Date*</label>
              <br/>
              <select
                name="endMonth" {...register('endMonth',{
                  required:"End Month is required"
                })}
              >
                <option value="">Month</option>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.endMonth?.message}</p>
              
              <input
                type="number"
                name="endYear"
                placeholder=" Enter the End Year"
               {...register('endYear',{
                required:"End Year is required"
               })}
              />

               <p style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "4px"
          }}>{errors.endYear?.message}</p>
            </div>

            <button type='button' onClick={()=>reset()}>Reset</button>
            <button type='button' onClick={()=>trigger()}>Trigger</button>
            <button type='button' onClick={handleGetValues}>Get Company Value</button>
            <button type='button' onClick={handleSetValues}>Set Company Value</button>
           <button type='submit' disabled={!isDirty ||  isSubmitting}>Submit</button>

            

      </form>
<DevTool control={control}></DevTool>
    </div>
  )
}

export default AddingExperience