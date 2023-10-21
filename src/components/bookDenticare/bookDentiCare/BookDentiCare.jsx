import React from 'react'
import './BookDentiCare.css'
import FormDropdown from '../formDropdown/FormDropdown'

function BookDentiCare() {
  return (
    <div className='book_denticare_page'>
      <div className="container">
        <div className="book_denticare_main">
          <div className="book_denticare_img_container">
            <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="" />
          </div>
          <div className="book_denticare_form_containet">
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
                <div className="book_denticare_form_input_border">
                  <label>Choose your Dentist</label>
                  <div className="book_denticare_form__drop_down">
                    <FormDropdown />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDentiCare