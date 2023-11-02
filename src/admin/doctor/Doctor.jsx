import React from 'react'
import './Doctor.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import { useState } from 'react';

import { doctorpage } from '../../static/DoctorPage'


function Doctor() {

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
    )
}

export default Doctor
