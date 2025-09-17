import React from "react";
import { useState } from "react";
import ContactBookContext from "./ContactBookContext";


const ContactBookContextProvider=({children})=>{
    const [addContact,setAddContact]=useState([{
        
            id:1,
            name:'Mirza',
            city: 'Lahore',

            }
    ]);
    const AddContact=(data)=>{
     setAddContact((prev)=>[...prev,{id:Date.now(),...data}])
    };
    const UpdateContact=(id,data)=>{
      setAddContact((prev)=>prev.map((contact)=>(
        contact.id===id? {...contact,...data}:contact
      )))
    };
    const DeleteContact=(id)=>{
     setAddContact((prev)=>prev.filter((contact)=>contact.id!==id))
    }

    return(
    <ContactBookContext.Provider value={{addContact,setAddContact,AddContact,UpdateContact,DeleteContact}}>
       {children}
    </ContactBookContext.Provider>
    )

}
export default ContactBookContextProvider