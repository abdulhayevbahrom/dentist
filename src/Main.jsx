import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

function Main() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default memo(Main)
