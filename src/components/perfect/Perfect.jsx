import React from 'react'
import './Perfect.css'
import image from '../../images/img-booking.png'
import images from '../../images/signature.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

function Perfect() {
  return (
    <div className='perfect'>
      <div className="container">
        <div className="perfect_main">


          <motion.div
           variants={fadeIn('right', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="left">
            <h1>A Perfect Smile Guaranteed</h1>
            <div className="input_div">
              <input type="text" placeholder='Your email address' className='input1' />
              <select name='Select Your Dentist' className='input2'>
                <option value="/Select Your Dentist">Select Your Dentist</option>
                <option value="/Allen">Allen Fischer</option>
                <option value="/Alex ">Alex Terrel</option>
                <option value="/Michél ">Michél Anderson</option>
                <option value="/Edwin ">Edwin Southgate</option>
                <option value="/Carlie ">Carlie Addison</option>
              </select>
              <input type="date" className='input3' />
              <button>Book Your Dentist</button>
              <img src={image} alt="" />
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="right">
            <p>My family trusts Dr Fischer completely, he’s<br></br> been with us for years and as helped us on<br></br> numerous occasions</p>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Perfect
