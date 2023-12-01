import React, { useEffect, useState } from "react";
import "../CSS/Greeting.css";

const hours = new Date().getHours();
let message = "Good Morning";
let username  = localStorage.getItem('username');
console.log(username);
if(username === '')
{
    username = "there";
} 
let bgstyle=
{
    color:'blue'
}

if(hours>=12 && hours<18)
{
    message = "Good AfterNoon";
    bgstyle.background = "#F2921D"
    bgstyle.color = "white"
}
else if(hours>=18 && hours <21)
{
    message = "Good Evening";
    bgstyle.background = "#10A19D"
    bgstyle.color = "white" 
}
else if(hours>=21 && hours <=24)
{
    message = "Good Night";  
    bgstyle.background = "#3A1078"
    bgstyle.color = "white" 
}

function GreetingApp()
{

    const [name, setName] = useState('');
    useEffect(()=>{
        let loggedName = localStorage.getItem("username");
        setName(loggedName);
    },[])

    return(
   <div className="container-fluid">
    <div className="row">
        <div className="col-sm-12 my-5">
        <div className="msgBox" style = {{background:bgstyle.background,color:bgstyle.color}} >
            <h1>Hello, {!!name?name:'There'} <br/><span> {message}</span></h1>
        </div>
        </div>
    </div>
   </div>
    );
}
export default GreetingApp;