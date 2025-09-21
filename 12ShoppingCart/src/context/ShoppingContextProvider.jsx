import React, { useState } from "react";
import ShoppingContext from "./ShoppingContext";

const ShoppingContextProvider=({children})=>{
     const [addCart,setAddCart]=useState([]);
     const AddCart=(updater)=>{
         setAddCart((prev)=>{
             if (typeof updater==='function'){
                return updater(prev);
             }
             return [...prev,updater];
         })
     }
     const DeleteCart=(id)=>{
        setAddCart((prev)=>prev.filter((exp)=>exp.id!==id));
     }
     const UpdateCart=(id,data)=>{
         setAddCart((prev)=>prev.map((exp)=>(exp.id===id?{...exp,...data}:exp)))
     }


return(
    <ShoppingContext.Provider value={{addCart,setAddCart,AddCart,DeleteCart,UpdateCart}}>
       {children}
    </ShoppingContext.Provider>
)
}

export default ShoppingContextProvider;
