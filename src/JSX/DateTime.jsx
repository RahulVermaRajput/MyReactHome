import React from "react";

const curentdatetime = new Date();
const fulldatetime = new Date().toISOString();


function CurrentDate()
{
    return (curentdatetime.toLocaleDateString());
}
function CurrentTime()
{
    //return (curentDateTime.getHours + " " +curentDateTime.getMinutes+ " "+curentDateTime.getSeconds);
    return (curentdatetime.toLocaleTimeString());
}
function FTime()
{
    return (curentdatetime.getHours() + "-" +curentdatetime.getMinutes()+ "-"+curentdatetime.getSeconds());
}
export default CurrentDate; // It can be change while import
export {CurrentTime,FTime ,fulldatetime , FirstName,ContextProvider}; // Same import as Export 