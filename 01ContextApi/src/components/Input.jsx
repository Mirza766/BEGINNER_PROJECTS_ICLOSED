import React, { useContext,useState} from "react";
import UserContext from "../context/UserCont";
function Input(){
    const [SecurityCode,setSecurityCode]=useState('');
    const {setdata,IdGenerator}=useContext(UserContext)
    const [Label,setLabel]=useState('') 
    const Submission=(e)=>{
        e.preventDefault();
        setdata(({SecurityCode}))
    }
    const setSecurityCodeLabel=(e)=>{
        setSecurityCode(e.target.value)
        setLabel(e.target.value)
    }


    return (
        <div>
      <label id={IdGenerator}>{Label}</label>
      <br/>
      <input type='text' 
      id={IdGenerator}  
      value={SecurityCode}
      onChange={setSecurityCodeLabel}
      placeholder="Enter the Code"/>
      <button onClick={Submission}>Submit</button>
      <br/>
       </div>
    );
}
export default Input;