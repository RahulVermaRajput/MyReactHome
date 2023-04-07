import React from "react";
import { useState } from "react";
import Clock from 'react-digital-clock';
import "../CSS/common.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "../JSX/TestContext";
export default function IncrementDecrement()
{
   
    const[count,setCount] = useState(0);
   
    const Increment = () =>{
        if(count===10)
        {
            alert("Maximum value reached!!!");
        }
        else
        {
            setCount(count+1);
        }
        
    }
    const Decrement = () =>{
        
        if(count===0)
        {
            alert("Minimum value reached!!!");
        }
        else
        {
            setCount(count-1);
        }
     }
    const user = useContext(UserContext);
    return (
        
        <>
            
            <div className="inc_dec_container">
                <h3 style = {{backgroundColor:'blue'}}><Clock/></h3>
                <h3>Increment Decrement App</h3>
                <h1>Rahul {user}</h1>  
                <h1>{count}</h1>  
                <p>Material UI Button</p>
                <Button variant="contained" color = "primary" onClick={Increment} ><AddIcon/></Button> &nbsp;&nbsp;&nbsp;
                <Button variant="contained" color = "secondary" onClick={Decrement} ><RemoveIcon/></Button>
                <br/> <br/>
                <p>Bootstrap Button</p>
                <button className="btn btn-outline-success" onClick={Increment} ><AddIcon/></button> &nbsp;&nbsp;
                <button className="btn btn-outline-danger" onClick={Decrement}><RemoveIcon/></button>
                <br/> <br/>
                <p>My Button</p>
                <button className="btn1" onClick={Increment} ><AddIcon/></button> &nbsp;&nbsp;
                <button className="btn1" onClick={Decrement}><RemoveIcon/></button>
            </div>
        </>
    );
}