import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#abc">My App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#abccollapsibleNavbar">
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
              {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#abc" role="button" data-bs-toggle="dropdown">Dropdown</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#abc">Link</NavLink></li>
            <li><NavLink className="dropdown-item" to="#abc">Another link</NavLink></li>
            <li><NavLink className="dropdown-item" to="#abc">A third link</NavLink></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>       
      </>
  );
}