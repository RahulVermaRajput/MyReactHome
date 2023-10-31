import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import CrudHome from "./CrudHome";
import CrudRead from "./CrudRead";
import GreetingApp from "./Greeting";
import LoginPage from "./LoginPage";
import SignUp from "./Signup";
import Main from "./Main";
function App() {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(()=>{
        let isUserValid = localStorage.getItem("isUserValid");
        console.log(isUserValid);
        setIsUserAuthenticated(isUserValid);
    },[isUserAuthenticated])
    
    return (
        <>

            {/* <div style = {{padding:"28px"}}></div> */}
            <Routes>
                {
                    isUserAuthenticated ?
                        (
                            <Route exact path="valid" element={<NavBar onLogout={()=> setIsUserAuthenticated(false)} />} >
                                <Route exact path="home" element={<GreetingApp />} />
                                <Route exact path="about" element={<About />} />
                                <Route exact path="services" element={<Services />} />
                                <Route exact path="contact" element={<Contact />} />
                                <Route exact path="crudapp" element={<CrudDashboard />} >
                                    <Route exact path="crudhome" element={<CrudHome />} />
                                    <Route exact path="crudadd" element={<CrudAdd />} />
                                    <Route exact path="crudread" element={<CrudRead />} />
                                    <Route exact path="crudupdate" element={<CrudUpdate />} />
                                </Route>
                            </Route>
                        )
                        :
                        (
                            <Route exact path="/" element={<Main />} >
                                <Route exact path="/" element={<Home />} />
                                <Route path="login" element={<LoginPage onLogin={() => setIsUserAuthenticated(true)} />} />
                                <Route exact path="signup" element={<SignUp />} />
                            </Route>
                        )
                }

                <Route path = "*" element={<NotFound/>} />

            </Routes>
        </>
    );


   
}


function NotFound() {
    return (
      <div style = {{display:'flex',textAlign:'center',color:'white',background:'grey',height:'100vh',alignItems:'center',justifyContent:'center',
      flexWrap:'nowrap',padding:'5px'}}>
        <div>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        </div> 
      </div>
    );
  }
export default App;