import React from 'react'
import './LocationCard.css'
import { HiOutlinePhoneXMark} from 'react-icons/hi2'
import {PiMapPinLine} from 'react-icons/pi'
import {BsBook} from 'react-icons/bs'
import {HiOutlineMail } from 'react-icons/hi'


function LocationCard() {
    return (
        <div className='LocationCard'>
            <div className="LocationCard_items">
                <HiOutlinePhoneXMark />
                <h2>Emergency Phone</h2>
                <p>415-205-5550
                    Call us Anytime 24/7</p>
            </div>
            <div className="LocationCard_items">
                <PiMapPinLine/>
                <h2>Address</h2>
                <p>
                    500 Linden Ave, South San Francisco,
                    CA 94080, United States</p>
            </div>
            <div className="LocationCard_items">
                <BsBook/>
                <h2>Book By Phone</h2>
                <p>415-205-5550 <br />
                    405-222-5551</p>
            </div>
            <div className="LocationCard_items">
                <HiOutlineMail/>
                <h2>Email Us</h2>
                <p>office@denticare.com
                    emergencies@denticare.com</p>
            </div>
        </div>
    )
}

export default LocationCard