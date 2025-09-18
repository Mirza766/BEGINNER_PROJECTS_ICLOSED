import React from "react";
import {useState,useEffect,useRef} from "react"

function Timer(){
const initialStartTime=5*60*1000;
const [isRunning,setIsRunning]=useState(false);
const [timeLeft,setTimeLeft]=useState(initialStartTime);

const interval=useRef(null);


const TimeFormatting=(ms)=>{
    const totalSeconds=Math.floor(ms/1000);
    const minutes=String(Math.floor(totalSeconds/60)).padStart(2,"0");
    const seconds=String(totalSeconds%60).padStart(2,"0");
    return `${minutes}:${seconds}`;
}

const Starting=()=>{
if(!isRunning){
    setIsRunning(true);
}
}

const Reset=()=>{
setIsRunning(false);
setTimeLeft(initialStartTime);
}

const Stoping=()=>{
    setIsRunning(false);
}


useEffect(()=>{
    if (isRunning){
        interval.current=setInterval(()=>{
        setTimeLeft((prev)=>{
           if(prev<=1000){
            clearInterval(interval.current);
            setIsRunning(false);
            return 0;
           }
           return prev-1000;
        })
        },1000)
    }
    return ()=>clearInterval(interval.current);

},[isRunning])


return (
    <div>
   <h2>CountDown Timer</h2>
   <p>{TimeFormatting(timeLeft)}</p>
<button onClick={Starting}>
    Start
</button>
<button onClick={Reset}>
  Reset
</button>
<button onClick={Stoping}>
Stop
</button>

   </div>




)

}


export default Timer;