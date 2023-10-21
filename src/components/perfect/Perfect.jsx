import React from 'react'
import './Perfect.css'
import image from '../../images/img-booking.png'
import images from '../../images/signature.png'

function Perfect() {
  return (
    <div className='perfect'>
      <div className="container">
        <div className="perfect_main">


          <div className="left">
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
          </div>
          <div className="right">
            <p>My family trusts Dr Fischer completely, he’s<br></br> been with us for years and as helped us on<br></br> numerous occasions</p>
            <img src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfect
