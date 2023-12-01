import React from "react";
import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
function Main() {
    const fullPageStyle = {
        fontSize: '16px',
        height: '100vh',
        textAlign:'center',
    };

    // const center = {
    //     padding: '70px 0',
    //     border: '3px solid green',
    //     textAlign: 'center',
    //     backgroundColor: "red",
    //     height: '100vh',
    //     width: '100%',

    // };

    return (
        <>
            {/* <Greeting/> */}
            <div className="container-fluid" style={fullPageStyle}>
                <div className="row">
                    <div className="col-md-2 p-3 bg-dark left-menu-container">
                    <NavLink to="/" className="nav-link" ><Button variant="outlined" style = {{width:'120px'}}> Home </Button></NavLink>
                        <br />
                    <NavLink to="/login" className="nav-link" > <Button variant="outlined" style = {{width:'120px'}}> Login </Button></NavLink>
                        <br />
                    <NavLink to="/signup" className="nav-link" ><Button variant="outlined" style = {{width:'120px'}}> Sign Up </Button></NavLink>
                    </div>
                    <div className="col-md-10 p-3 bg-secondary" style={fullPageStyle}>
                       <Outlet/>
                    </div>
                </div>
            </div>




        </>
    );
}
export default Main;