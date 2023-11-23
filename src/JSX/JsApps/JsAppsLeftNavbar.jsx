import React from 'react';
import '../../CSS/jsapps.css';
import { NavLink, Outlet } from 'react-router-dom';

const JsAppsLeftNavbar = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-2 mx-auto " style={{padding:'0px',background:'grey'}}>
            <Sidebar />
          </div>
          <div className="col-sm-10  content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};


const Sidebar = () => {
  return (
    <div className="myLeftNavBar">
    <div className="d-flex flex-column flex-shrink-0 pt-2 bg-light" style={{ width: '330px',background:'red' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsHome" className="nav-link">JS Apps Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsEmiCalc" className="nav-link" >EMI Calculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsSpaceRemover" className="nav-link">Multi Space Remover</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsStringComparator" className="nav-link">String Comparator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsTextComparator" className="nav-link">Text Comparator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsSpaceRemover3" className="nav-link">Multi Space Remover</NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default JsAppsLeftNavbar;
