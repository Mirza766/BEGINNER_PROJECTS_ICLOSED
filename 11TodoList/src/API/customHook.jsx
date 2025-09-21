import React from "react";
import { useState,useEffect } from "react";

export default function useLocalStorage(key,initialValue){

const [value,setValue]=useState(()=>{
    try{
    const stored=localStorage.getItem(key);
    return stored?JSON.parse(stored):initialValue
}
catch(err){
 console.error("Error loading from localStorage", err);
      return initialValue;
}

}
);

 useEffect(()=>{
        try{
       localStorage.setItem(key,JSON.stringify(value));

        }catch(err){
     setError(err);
        }
     },[key,value])
    
    return [value,setValue]
    
    }