import React from "react"
import axios from "axios"

export const fetchData=async({pageParam=1})=>{
try{
    const res=await axios.get(`https://rickandmortyapi.com/api/character?per_page=10&page=${pageParam}`);
    return res.data;

}catch(error){
console.log(error);
}
}