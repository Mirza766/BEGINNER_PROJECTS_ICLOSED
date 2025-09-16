import React from "react";
import TicketContext from "../context/TicketContext";
import { useContext } from "react";


function ShowData(){
    const {addData}=useContext(TicketContext);

if(addData) {
    console.log('Data is Coming',addData)
}
    return(
         <>
        {addData && addData.people?( 
             <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded-xl p-4 mt-4"> 
       <h2>Ticket Reservation Data</h2>
       <p>{addData.people}</p>
       <p>{addData.date ? new Date(addData.date).toLocaleDateString() : ""}</p>
       <p>{addData.time}</p>
       <p>{addData.name}</p>
       <p>{addData.phoneNumber}</p>

   </div> ):(
    <p>No reservation found</p>)
}
</>
    );
}
export default ShowData