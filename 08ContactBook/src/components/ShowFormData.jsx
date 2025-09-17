import React from "react";
import ContactBookContextProvider from "../context/ContactBookContextProvider";
import ContactBookContext from "../context/ContactBookContext";
import { useContext } from "react";
import { useState } from "react";

function ShowContactDetails(){

    const {addContact,UpdateContact,DeleteContact}=useContext(ContactBookContext); 
    const [editName,setEditName]=useState("null");
    const [editCity,setEditCity]=useState("");
    const [editId,setEditId]=useState("");
    
     const UpdatingContact=(e)=>{
       // e.preventDefault();
        UpdateContact(editId,{name:editName,city:editCity})
        Cancelling();
     }
     const editContact=(contact)=>{
        setEditId(contact.id);
       setEditCity(contact.city);
       setEditName(contact.name)
     }

    const Cancelling=()=>{
    setEditId(null);
    setEditName("");
    setEditCity("");
     }
     const DeletingContact=(id)=>{
        DeleteContact(id)
     }

    return (
        <div>
            <ul>
                {addContact.map((contact)=>(
                    <li key={contact.id}>                  
                     {
                        editId===contact.id?(
                      <form onSubmit={UpdatingContact}>
                          <input type='text' value={editName} onChange={((e)=>setEditName(e.target.value))}/>
                          {" "}
                          <input type='text' value={editCity} onChange={((e)=>setEditCity(e.target.value))}/>
                          <button type='submit'>Update</button>
                          <button onClick={Cancelling}>Cancel</button>
                      </form>
                        ):( <>
                <strong>{contact.name}</strong> — {contact.city}{" "}
                
                <button onClick={() => editContact(contact)}>Edit</button>
                <button onClick={() => DeletingContact(contact.id)}>Delete</button>
              </>)
                     }
                    </li>
       
                ))}
            </ul>
        </div>
    )
}

export default ShowContactDetails