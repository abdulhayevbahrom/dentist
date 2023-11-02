import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Admin from './admin/Admin'
import Dashboard from './admin/dashboard/Dashboard'
import Doctor from './admin/doctor/Doctor'
import Login from './pages/login/Login'
import { AdminController } from './controller/AdminContoller'
import Patient from './admin/patient/Patient'

function Router() {
    return (
        <div className='router'>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Route>

                <Route path='/admin' element={<AdminController />} >
                    <Route path='/admin' element={<Admin />} >
                        <Route path='/admin/dashboard' element={<Dashboard />} />
                        <Route path='/admin/doctor' element={<Doctor />} />
                        <Route path='/admin/patient' element={<Patient />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Router