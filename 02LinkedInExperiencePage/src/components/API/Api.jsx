import React from "react";
 import axios from "axios";


 const api=axios.create({
    baseURL:"http://localhost:5173"
 })


 export const FetchInd=async(id)=>{
    try{
        const res=await api.get(`/experience/${id}`)
        return res.data
    }catch(error){
        console.log(error)
    }
 }
