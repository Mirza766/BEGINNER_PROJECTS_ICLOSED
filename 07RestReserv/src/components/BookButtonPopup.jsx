import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


export default function BookButton() {
    const [open, setOpen] = useState(false);
    const [bookReserve, setBookReserve] = useState(false);
    const [date, setDate] = useState(new Date())
    const [people, setPeople] = useState("2")
    const timeSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!open && (
                <button onClick={() => setOpen(true)}>
                    Open
                </button>
            )}

            {open && (
                <div>
                    {!bookReserve && <h2>Book a Table</h2>}
                    {bookReserve && <h2>Contact Details</h2>}

                    {!bookReserve && (
                        <>
                            <div className="mb-4">
                                <label>People:  </label>
                                <select
                                    className="w-medium border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                >
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5">5 People</option>
                                    <option value="6">6 People</option>
                                    <option value="7">7 People</option>
                                    <option value="8">8 People</option>
                                </select>
                            </div>
                            <div>
                                <label> Time:  </label>
                               
                                <select className="border border-gray-300 rounded-lg p-2 w-medium">
                                    {timeSlots.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                  <div>
                                <label className="block mb-1 font-medium">Date</label>
                                <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="MM/dd/yyyy" className="w-full border rounded-lg p-2"></DatePicker>
                            </div>
                            <button onClick={() => setBookReserve(true)}>Book Me</button>
                        </>
                    )}
                    {bookReserve && (
                        <div>
                            <div>
                                <label> Name</label>
                                <br />
                                <input type="text" placeholder="Enter the Name" />
                            </div>
                            <div>
                                <label> Phone Number</label>
                                <br />
                                <input type="text" placeholder="Enter the Phone Number" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
