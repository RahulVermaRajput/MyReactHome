import React from 'react';
import '../../CSS/jsapps.css';
import { NavLink, Outlet } from 'react-router-dom';

const JsAppsLeftNavbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className="row">
        <div className="col-sm-2">
            <div className="left-navbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/valid/jsApps/jsAppsHome" className="nav-link">JS Apps Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/valid/jsApps/jsAppsEmiCalc" className="nav-link" >EMI Calculator</NavLink>
                </li>
                </ul>
            </div>
        </div>
        <div className="col-sm-10 mx-auto content">
          <Outlet/>
        </div>
    </div>
    </div>
    </>
  );
};

export default JsAppsLeftNavbar;
