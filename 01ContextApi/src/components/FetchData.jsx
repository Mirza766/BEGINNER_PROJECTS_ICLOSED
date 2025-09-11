import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/UserCont";
function FetchData(){
    
    const {data}=useContext(UserContext);
   if (!data) return <div>No Data Specified by user</div>
   return <div>Code is:  {data.SecurityCode}</div>
}

export default FetchData;