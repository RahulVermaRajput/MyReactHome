import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout=()=>{
      localStorage.removeItem("isUserValid");
      localStorage.removeItem("username");
      localStorage.removeItem("emailid");
      props.onLogout();
      navigate('/');
  }


  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#abc">My React App @ Github</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/crudapp/crudhome">My CRUD App</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/valid/jsapps/jsAppsHome">My JS Apps</NavLink>
              </li>
             
            
            </ul>
          </div>
          <form className="d-flex">
          <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>Logout</button>
    </form>
        </div>
      </nav>  
      <br/><br/> 
      <Outlet/>    
      </>
  );
}