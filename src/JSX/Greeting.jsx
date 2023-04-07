import React from "react";
import "../CSS/Greeting.css";

const hours = new Date().getHours();
let message = "Good Morning";

let bgstyle=
{
    color:'#FFDD83'
}

if(hours>=12 && hours<18)
{
    message = "Good AfterNoon";
    bgstyle.color = "#F2921D"
}
else if(hours>=18 && hours <21)
{
    message = "Good Evening";
    bgstyle.color = "#10A19D"
}
else if(hours>=21 && hours <=24)
{
    message = "Good Night";  
    bgstyle.color = "#3A1078" 
}

function GreetingApp()
{
    return(
   <div className="">
        <div className="msgBox" style = {{background:bgstyle.color}} >
            <h1>Hello There , <span> {message}</span></h1>
        </div>
   </div>
    );
}
export default GreetingApp;