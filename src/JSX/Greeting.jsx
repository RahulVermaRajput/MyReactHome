import React from "react";
import "../CSS/Greeting.css";

const hours = new Date().getHours();
let message = "Good Morning";

let bgstyle=
{
    color:'blue'
}

if(hours>=12 && hours<18)
{
    message = "Good AfterNoon";
    bgstyle.bgcolor = "#F2921D"
    bgstyle.color = "white"
}
else if(hours>=18 && hours <21)
{
    message = "Good Evening";
    bgstyle.bgcolor = "#10A19D"
    bgstyle.color = "white" 
}
else if(hours>=21 && hours <=24)
{
    message = "Good Night";  
    bgstyle.bgcolor = "#3A1078"
    bgstyle.color = "white" 
}

function GreetingApp()
{
    return(
   <div className="container-fluid">
    <div className="row">
        <div className="col-sm-12 my-5">
        <div className="msgBox" style = {{background:bgstyle.bgcolor,width:"300px",color:bgstyle.color}} >
            <h1>Hello There,<br/><span> {message}</span></h1>
        </div>
        </div>
    </div>
   </div>
    );
}
export default GreetingApp;