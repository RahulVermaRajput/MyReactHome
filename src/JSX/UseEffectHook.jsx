import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
export default function UseEffectHook()
{
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    useEffect(()=>{
        document.title = `Title changed ${count} times!!!`;
    },[count]);
    useEffect(()=>{
        alert("clicked"+count1);
    },[count1]);

    return(
        <>
            <div style = {{background:'white',padding:'5%'}}>
            <Button variant="contained" color = "primary" onClick={()=>{
                setCount(count+1);
            }}>Click Me {count}</Button> &nbsp;&nbsp;&nbsp;

            <Button variant="outlined" color = "primary" onClick={()=>{
                setCount1(count1+1);
            }}>Click Me {count1}</Button>
            </div>
        </>
    );
}