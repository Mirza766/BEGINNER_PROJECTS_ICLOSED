import React from "react";
import UserContext from "./UserCont";
import { useState,useId } from "react";

const UserContextProvider=({children})=>{

   const [data,setdata]=useState('');
   let IdGenerator=useId()
   return(
   <UserContext.Provider value={{data,setdata,IdGenerator}}>
        {children}
   </UserContext.Provider>
   )
}
export default UserContextProvider
