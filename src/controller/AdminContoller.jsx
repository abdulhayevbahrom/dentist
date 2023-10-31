import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export const AdminController = () => {
    const location = useLocation();
    const admin = localStorage.getItem("admin");
    console.log(admin);
    if (admin) return <Outlet />
    else return <Navigate to={'/login'} state={{ from: location }} />
} 