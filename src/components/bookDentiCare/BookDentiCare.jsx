import React, { useState } from 'react'
import './BookDentiCare.css'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
function BookDentiCare() {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState()
  const options = ["Allen Fischer", "Alex Terrel", "Michél Anderson", "Edwin Southgate", "Carlie Addison"]
  return (
    <div className='book_denticare_page'>
      <div className="container">
        <div className="book_denticare_main">
          <motion.div
           variants={fadeIn('right', 0.2 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="book_denticare_img_container">
            <div className="book_denticare_img_item">
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="" />
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.2 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="book_denticare_form_containet">
            <div className="book_denticare_form_title">
              <h2>Book Your Visit At</h2>
              <h1>DentiCare</h1>
            </div>
            <p className='book_denticare_form_p_text'>Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
            <div className="book_denticare_form_input_container">
              <div className="book_denticare_form_input_container_item">
                <div className="book_denticare_form_input_border">
                  <label>Your name <sup>*</sup></label>
                  <input type="text" />
                </div>
                <div className="book_denticare_form_input_border">
                  <label>Your Phone Number <sup>*</sup></label>
                  <input type="tel" />
                </div>
                <div className="book_denticare_form_input_border m-top">
                  <label>Choose your Dentist</label>
                  <div className='dropdown'>
                    <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>{value ? value : "Select Dentst here"} {isActive ? <BsChevronUp /> : <BsChevronDown />}</div>
                    {
                      isActive && (
                        <div className="dropdown_content">
                          {
                            options.map((option, index) => (
                              <div key={index}

                                onClick={() => setValue(option, setIsActive(false))}
                                className="dropdown_item"
                              >
                                {option}
                              </div>
                            ))
                          }

                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="book_denticare_form_input_border">
                  <label>Appointment date <sup>*</sup></label>
                  <input type="datetime-local" />
                </div>
              </div>
              <div className="book_denticare_form_containet_button">
                <button className='book_denticare_form_containet_button_input'>Book Appoinment Now</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BookDentiCare