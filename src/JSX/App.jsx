import React, { useEffect, useState } from "react";
import { Routes, Route,Redirect, useNavigate } from "react-router-dom";
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
import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import JsHome from "./JsApps/JsHome";
import JsAppsDashboard from "./JsApps/JsAppsDashboard";
import EMICalc from "./JsApps/EMICalc";
import SpaceRemover from "./JsApps/SpaceRemover";
function App()
{
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let isUserValid = localStorage.getItem("isUserValid");
        console.log(isUserValid);
        setIsUserAuthenticated(isUserValid);
        if(isUserValid)
        {
            navigate("/valid/home");
        }
        else{
            navigate("/");
        }
        

    },[isUserAuthenticated]);

    return (
        <>
        <ToastContainer />

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
                                        <Route exact path="home" element={<GreetingApp />} />
                                    </Route>
                                    <Route exact path="jsApps" element={<JsAppsDashboard />} >
                                        <Route exact path="jsAppsHome" element={<JsHome />} />
                                        <Route exact path="jsAppsEmiCalc" element={<EMICalc />} />
                                        <Route exact path="jsAppsSpaceRemover" element={<SpaceRemover/>} />
                                        <Route path = "*" element={<PageNotFound/>} />
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
  function PageNotFound() {
    return (
      <div style = {{display:'flex',textAlign:'center',color:'white',background:'grey',height:'100vh',alignItems:'center',justifyContent:'center',
      flexWrap:'nowrap',padding:'5px'}}>
        <div>
        <h1>404 - Page Not Available.</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        </div> 
      </div>
    );
  }
export default App;

// 101597519443