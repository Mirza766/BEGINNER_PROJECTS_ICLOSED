import React from "react";
import { useState,useEffect} from "react";


//Alternate Method (Method 2)

const useFetch=(url)=>{
  const [error,setError]=useState(null);
  const [data,setData]=useState(null);
  const [loading,isLoading] =useState(true)

    useEffect(()=>{
        fetch(url).then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data);
        }).catch((error)=>{
            console.error("Error Fetching data",error)
            setError(error)
        }).finally(()=>isLoading(false))
        
    },[url])

      return {error,data,loading}
};

export default useFetch;