import TicketContext from "./TicketContext";
import { useState } from "react";

const TicketContextProvider=({children})=>{
    const [addData,setData]=useState({});
    return(
    <TicketContext.Provider value={{addData,setData}}>
       {children}
    </TicketContext.Provider>
    )

}
export default TicketContextProvider