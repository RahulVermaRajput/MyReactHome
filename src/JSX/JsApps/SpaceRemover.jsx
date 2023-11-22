import React from "react";
import { useState } from "react";
import "../../CSS/jsapps.css";

const  SpaceRemover = ()=>
{
    const removeExtraSpaces = (inputString)=> {

        return inputString.replace(/\s+/g, ' ').trim();
    }

    const [originalText, setOriginalText] = useState();
    const [updatedText, setUpdatedText] = useState();
   
    const removeSpace = (event)=>{
        //setOriginalText(event.target.value);
        const newText  = removeExtraSpaces(originalText);
        setUpdatedText(newText);
    }

    return (
    <>
        <h1>Space Remover</h1>
        <hr/>

        <div className="row">
            <div className="col-xl-5">
                <textarea className="space-remover" value = {originalText} onChange = {(event)=>setOriginalText(event.target.value)}/> 
            </div>
            <div className="col-xl-1">
            <input type = "button" value = "Convert" onClick = {removeSpace} className= "btn btn-primary my-2"/>
            </div>
            <div className="col-xl-5">
                <textarea readonly className="space-removed"  value={updatedText}  /> 
            </div>
        </div>
    </>
    );
}
export default SpaceRemover;
