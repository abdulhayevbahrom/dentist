import React, { useState } from 'react'
import { useLocation } from 'react-router'
import './Doctor.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import { useState } from 'react';

import { doctorpage } from '../../static/DoctorPage'


function Doctor() {
<<<<<<< HEAD

    const [openSidebar, setOpenSidebar] = useState(false);
    openSidebar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return (
        <div className='doctor'>
            <div className='doctor_top'>
                Doctor Page
            </div>

            {doctorpage.map((item, index) => (
                openSidebar &&
                <div key={index} className='doctor_info' onClick={() => setOpenSidebar(false)}>
                    <div className='doctor_info_card'>
                        <p>{item.info}</p>
                    </div>
                </div>


            ))}
            <div className='doctor_item'>

                {doctorpage.map((item, index) => (
                    <div className='doctor_items_' key={index}>
                        <img src={item.img} alt={item.fullname} />
                        <h2> {item.doctor}</h2>
                        <h1>{item.fullname}</h1>
                        <p>{item.work}</p>
                        <div><BsFacebook />  <BsInstagram /> <BsLinkedin /></div>
                        <a href="#" onClick={() => setOpenSidebar(true)}>info</a>
                    </div>
                ))
                }



            </div>

        </div >
=======
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [price, setPrice] = useState("")
    const [massages, setMassages] = useState("")
    const location = useLocation()
    const handleSubmit = (e) => {
        e.prevetDefault()
        console.log(name);
    }
    return (
        <div className='doctor'>
            <div className="doctor_add_header">
                <h2>add Doctor</h2>
                <h3><p>{location.pathname}</p></h3>
            </div>
            <div className='doctoradd'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Doctors</h2>
                    <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
                    <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                    <label>Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
                    <label>Massages: <input type="text" value={massages} onChange={(e) => setMassages(e.target.value)} /></label>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
>>>>>>> origin/abdulloh
    )
}

export default Doctor
