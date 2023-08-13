import React from "react";
import {Routes,Route} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import NavBar from "./NavBar";
import CrudAdd from "./CrudAdd";
import CrudUpdate from "./CrudUpdate";
import CrudDashboard from "./CrudDashboard";
import CrudLoginPage from "./CrudLogin";
import CrudSignUp from "./CrudSignup";
import CrudHome from "./CrudHome";
import CrudRead from "./CrudRead";
function App()
{
    return (
        <>  
        <NavBar/>
        <div style = {{padding:"28px"}}></div>
        <Routes>
            <Route exact path = "/" element={<Home/>} />
            <Route exact path = "/about" element={<About/>} />
            <Route exact path = "/services" element={<Services/>} />
            <Route exact path = "/contact" element={<Contact/>} />
            <Route exact path = "/crudapp" element={<CrudDashboard/>} >
                <Route exact path = "crudhome" element={<CrudHome/>} />
                 <Route exact path = "crudlogin" element={<CrudLoginPage/>} />
                 <Route exact path = "crudsignup" element={<CrudSignUp/>} />
                 <Route exact path = "crudadd" element={<CrudAdd/>} />
                 <Route exact path = "crudread" element={<CrudRead/>} />
                 <Route exact path = "crudupdate" element={<CrudUpdate/>} />
            </Route>
           
        </Routes>
        </>
    );
}
export default App;