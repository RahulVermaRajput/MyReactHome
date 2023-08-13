import React from "react";
import CrudLeftNavbar from "./CrudLeftNavbar";
import CrudHome from "./CrudHome";
import { Outlet } from "react-router-dom";

const CrudDashboard = () => {
    return (
        <>
            <CrudLeftNavbar/>
        </>
    )
}

export default CrudDashboard;