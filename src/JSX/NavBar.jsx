import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
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
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/crudapp">My CRUD App</NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>       
      </>
  );
}