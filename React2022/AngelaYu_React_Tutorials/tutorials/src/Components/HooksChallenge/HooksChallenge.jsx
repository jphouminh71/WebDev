import './styles.css';
import { useState } from 'react';

function HooksChallenge() {
    setInterval(updateTime, 1000);

    let currentLocalTime = new Date().toLocaleTimeString();

    const [localTime, setLocalTime] = useState(currentLocalTime);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString(); 
        setLocalTime(newTime);
    }

    return (
    <div className="container">
      <h1>{localTime}</h1>
      <button onClick={() => setLocalTime(currentLocalTime)} >Get Time</button>
    </div> )
}

export default HooksChallenge;

//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
