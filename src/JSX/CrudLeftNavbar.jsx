import React from 'react';
import '../CSS/crud.css';
import { NavLink, Outlet } from 'react-router-dom';

const CrudLeftNavbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className="row">
        <div className="col-sm-2">
            <div className="left-navbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/valid/crudapp/crudhome" className="nav-link" >Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/valid/crudapp/crudadd" className="nav-link">Crud Add</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/valid/crudapp/crudread" className="nav-link">Crud Read</NavLink>
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

export default CrudLeftNavbar;
