import React, { useState } from "react";
import { fetchCountries,fetchHoliday } from "./ExtractAPIData";
import {useQuery} from '@tanstack/react-query'
export default function PublicHoliday(){

const [country,setCountry]=useState("NL")

   
const {data:countries=[],isLoading:countriesLoading}=useQuery({
    queryKey:['country'],
    queryFn:fetchCountries,
})

const {data:holidays=[],isLoading:holidaysloading,isError,error}=useQuery({
     queryKey:['holiday',country],
    queryFn:()=>fetchHoliday(country),
})

if (countriesLoading || holidaysloading) return <p>Loading...</p>
if (isError) return <p>Error: {error.message}</p>
console.log(countries);
console.log(holidays);
return(
<>
<h2>Holiday Data</h2>
<select value={country} onChange={(e)=>setCountry(e.target.value)}>
    {countries.map((c)=>(
   <option key={c.isoCode} value={c.isoCode}>
   {c.name[0].text}
    </option>
    ))}   
</select>
<ul>
    {holidays.map((h)=>(
        <li key={h.id}>
            <strong>{h.name[0].text}</strong> — {h.startDate}
        </li>
    ))}

</ul>
</>
)


}