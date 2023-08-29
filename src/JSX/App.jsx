import React from "react";
import {Routes,Route} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import CrudAdd from "./CrudAdd";
import CrudUpdate from "./CrudUpdate";
import CrudDashboard from "./CrudDashboard";
import CrudHome from "./CrudHome";
import CrudRead from "./CrudRead";
import GreetingApp from "./Greeting";
import LoginPage from "./LoginPage";
import SignUp from "./Signup";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
function App()
{
    return (
        <>  

        <ToastContainer />

        {/* <NavBar/> */}
        {/* <div style = {{padding:"28px"}}></div> */}
        <Routes>
           

            <Route exact path = "/" element={<Main/>} >
                <Route exact path = "/" element={<Home/>} />
                <Route exact path = "login" element={<LoginPage/>} />
                <Route exact path = "signup" element={<SignUp/>} />
            </Route>
            
            <Route exact path = "/greet" element={<GreetingApp/>} />
            <Route exact path = "/about" element={<About/>} />
            <Route exact path = "/services" element={<Services/>} />
            <Route exact path = "/contact" element={<Contact/>} />
            <Route exact path = "/crudapp" element={<CrudDashboard/>} >
                <Route exact path = "crudhome" element={<CrudHome/>} />
                 
                 <Route exact path = "crudadd" element={<CrudAdd/>} />
                 <Route exact path = "crudread" element={<CrudRead/>} />
                 <Route exact path = "crudupdate" element={<CrudUpdate/>} />
            </Route>
           
        </Routes>
        </>
    );
}
export default App;