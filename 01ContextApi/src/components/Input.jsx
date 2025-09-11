import React, { useContext,useState} from "react";
import UserContext from "../context/UserCont";
function Input(){
    const [SecurityCode,setSecurityCode]=useState('');
    const {setdata,IdGenerator}=useContext(UserContext)

    const Submission=(e)=>{
        e.preventDefault();
        setdata(({SecurityCode}))
    }
    
    return (
        <div>
      <label htmlFor={IdGenerator}>First Name</label>
      <br/>
      <input type='text' 
      id={IdGenerator}  
      value={SecurityCode}
      onChange={(e)=>setSecurityCode(e.target.value)}
      placeholder="Enter the Code"/>
      <button onClick={Submission}>Submit</button>
       </div>
  
    );
}
export default Input;