import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState={
    experiences:[]
}

export const experienceSlice=createSlice({
  name:'experience',
  initialState,

  reducers:{
   addExperience:(state,action)=>{
    const experience={
       id:nanoid(),
       ...action.payload
    }
    state.experiences.push(experience);
   },
   updateExperience:(state,action)=>{
    state.experiences=state.experiences.map((exp)=>
        exp.id===action.payload.id?{...exp,...action.payload}:exp
    )
   },
   removeExperience:(state,action)=>{
    state.experiences=state.experiences.filter((exp)=>
    exp.id!==action.payload)
   },
  }
})

export const {addExperience,removeExperience,updateExperience}=experienceSlice.actions
export default experienceSlice.reducer
