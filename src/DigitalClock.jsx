import React,{useState,useEffect} from 'react'

function DigitalClock() {
    const [time,setTime]=useState(new Date());

useEffect(()=>{
    const interValid=setInterval(()=>{
        setTime(new Date());
    },1000)

    return ()=>{
        clearInterval(interValid)
    }
},[])

function formatTime(){
    let hours=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const meridiem=hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`;
}

function padZero(number){
    return (number < 10 ? "0" :"") + number
}

  return (
    <div className='container'>
        <h1 className='stranger'><hr className='top'/>STRANGER <br /><hr />THINGS<hr /></h1>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
        </div>
  )
}

export default DigitalClock