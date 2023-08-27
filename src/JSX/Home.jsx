import React from "react";
import Greeting from "../JSX/Greeting"
import { Button, ButtonGroup } from "@mui/material";
function Home()
{
    const fullPageStyle = {
        backgroundColor: '#000000',
        color: 'white',
        fontSize: '16px',
        height:'100vh',
    };

    const center =  {
        padding: '70px 0',
        border: '3px solid green',
        textAlign: 'center',
      };

    return (
        <>
         {/* <Greeting/> */}
         <div style = {fullPageStyle}>
        <div className="container-fluid row">
            <div className="col-sm-2">
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <Button variant="contained"> Home </Button>
            <br/><br/>
            <Button variant="contained"> Login </Button>
            <br/><br/>
            <Button variant="contained"> Sign Up </Button>
               
            </div>
            <div className="col-sm-6 center" style ={center}>
                <h1>Login Page</h1>
            </div>
        </div>
        </div>
        



        </>
    );
}
export default Home;