import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import About from './pages/about/About'
import Home from './pages/home/Home'

function Router() {
    return (
        <div className='router'>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router
