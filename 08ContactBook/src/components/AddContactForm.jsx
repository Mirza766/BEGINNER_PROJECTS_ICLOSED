import React from "react";
import ContactBookContextProvider from "../context/ContactBookContextProvider";
import { useState} from "react";
import { useContext } from "react";
import ContactBookContext from "../context/ContactBookContext";



function AddContactForm(){
const {AddContact,UpdateContact,DeleteContact}=useContext(ContactBookContext);
const [name,setName]=useState("");
const [city,setCity]=useState("");

const addingData=(e)=>{
    e.preventDefault()
    AddContact({name,city})
    setName("");
    setCity("");
}


return(
<form onSubmit={addingData}>
    <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} type='text'placeholder="Enter the Name"/>{" "}
        <input  value={city} onChange={(e)=>setCity(e.target.value)} type='text' placeholder="Enter the city"/>
        <button type='submit'> Add Contact</button>
    </div>  
</form>
   )
 }

export default AddContactForm