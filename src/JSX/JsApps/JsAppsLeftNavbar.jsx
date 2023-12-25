import React from 'react';
import '../../CSS/jsapps.css';
import { NavLink, Outlet } from 'react-router-dom';

const JsAppsLeftNavbar = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-2 mx-auto myLeftNavBar" style={{padding:'0px',background:'grey'}}>
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
    <div className="d-flex flex-column flex-shrink-0 pt-2 bg-light table-responsive" >
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
          <NavLink to="/valid/jsApps/jsAppsNumberToWords" className="nav-link">Num to Words</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsTextComparator" className="nav-link">Text Comparator</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsClock" className="nav-link">JS Clock</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/valid/jsApps/jsAppsSolarSystem" className="nav-link">Solar System</NavLink>
        </li>
      </ul>
    </div>
 
  );
};

export default JsAppsLeftNavbar;
