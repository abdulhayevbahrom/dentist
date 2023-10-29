import React from 'react'
import './Admin.css'
import Sidebar from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Admin() {
    return (
        <div className='admin'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Admin
