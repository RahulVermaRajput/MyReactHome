import React from "react";
import {Routes,Route} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import NavBar from "./NavBar";
function App()
{
    return (
        <>  
        <NavBar/>
        <Routes>
            <Route exact path = "/" element={<Home/>} />
            <Route exact path = "/about" element={<About/>} />
            <Route exact path = "/services" element={<Services/>} />
            <Route exact path = "/contact" element={<Contact/>} />
        </Routes>
        </>
    );
}
export default App;