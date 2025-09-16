import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useContext } from "react";
import TicketContext from "../context/TicketContext";
export default function BookButton() {
    const timeSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
    const [open, setOpen] = useState(false);
    const [bookReserve, setBookReserve] = useState(false);
    const {setData}=useContext(TicketContext);
    
    const [formData,setFormData]=useState({
            people:'2',
            time:'14:00',
            date:new Date(),
            name:'',
            phoneNumber:''
    })
const submitButton=(e)=>{
     e.preventDefault();
     setData(formData);
}
    const setPeople=(e)=>{
        const value=e.target.value;
        setFormData((prev)=>({...prev,people:value}))
    }
    const setTime=(e)=>{
        const value=e.target.value;
        setFormData((prev)=>({...prev,time:value}))
    }
     const setDate=(date)=>{
        setFormData((prev)=>({...prev,date}))
    }
     const setName=(e)=>{
        const value=e.target.value;
        setFormData((prev)=>({...prev,name:value}))
    }
      const setPhoneNumber=(e)=>{
        const value=e.target.value;
        setFormData((prev)=>({...prev,phoneNumber:value}))
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!open && (
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => setOpen(true)}>
                    Open
                </button>
            )}

            {open && (
                <form  onSubmit={submitButton} className="max-w-md mx-auto bg-gray-50 shadow-md rounded-2xl p-6 space-y-4">
                <div>
                    {!bookReserve && <h2>Book a Table</h2>}
                    {bookReserve && <h2>Contact Details</h2>}

                    {!bookReserve && (
                        <>
                            <div className="mb-4">
                                <label>People:        </label>
                                <select value={formData.people} onChange={setPeople}
                                    className="w-medium border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                >
                                    <option value="1 Person">1 Person</option>
                                    <option value="2 Persons">2 People</option>
                                    <option value="3 persons">3 People</option>
                                    <option value="4 persons">4 People</option>
                                    <option value="5 persons">5 People</option>
                                    <option value="6 persons">6 People</option>
                                    <option value="7 persons">7 People</option>
                                    <option value="8 persons">8 People</option>
                                </select>
                            </div>
                            <div>
                                <label> Time:        </label>
                               
                                <select value={formData.time} onChange={setTime} className="border border-gray-300 rounded-lg p-2 w-medium">
                                    {timeSlots.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                  <div>
                                <label className="block mb-1 font-medium">Date</label>
                                <DatePicker selected={formData.date} onChange={setDate} dateFormat="MM/dd/yyyy" className="w-full border rounded-lg p-2"></DatePicker>
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => setBookReserve(true)}>Book Me</button>
                        </>
                    )}
                    {bookReserve && (
                        <div >
                            <div className="bg-sky-100"> 
                            <p>
  You are making a reservation for <span className="font-semibold">{formData.people}</span>{" "}
  on <span className="font-semibold">{formData.date.toLocaleDateString()}</span>{" "}
  at <span className="font-semibold">{formData.time}</span>
</p>
</div>

                            <div>
                                <label> Name</label>
                                <br />
                                <input value={formData.name} onChange={setName} type="text" placeholder="Enter the Name" />
                            </div>
                            <div>
                                <label> Phone Number</label>
                                <br />
                                <input value={formData.phoneNumber} onChange={setPhoneNumber} type="text" placeholder="Enter the Phone Number" />
                            </div>
                            <button type='submit' className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                            Confirm Booking
                            </button>
                        </div>
                    )}
                </div>
                </form>
            )}
        </div>
    );
}
