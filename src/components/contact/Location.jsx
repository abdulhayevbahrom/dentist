import React from 'react'
import './Location.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import LocationCard from './LocationCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Location() {
  return (
    <div className='location'>
      <div className="container">
        <div className="location_container_main">
          {/* <div className="location_heading">
            <h1>Contact <span>DentiCare</span></h1>
            <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</p>
          </div> */}

          <div className="location_main">
            <motion.div
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
             whileInView={'show'}
              viewport={{once: false,amount:0.7}} 
            className="location_main_left">
            <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80637.45709501492!2d69.21919984087847!3d41.31522794011457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sru!2s!4v1698949257717!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
            <motion.div
            variants={fadeIn('left', 0.3 )}
            initial='hidden'
             whileInView={'show'}
              viewport={{once: false,amount:0.7}} 
            className="location_main_right">
              <div className="location_main_right_item">
                <h1>Working Hours</h1>
                <p>Check out DentiCare’s Office hours to plan your visit.</p>
                <div className="location_main_right_item_box">
                  <div className="location_main_right_item_box_child">
                    <p>Monday</p>
                    <span>8AM-9PM</span>
                    <button>Book <AiOutlineClockCircle /> </button>
                  </div>
                  <hr />
                  <div className="location_main_right_item_box_child">
                    <p>Tuesday</p>
                    <span>8AM-9PM</span>
                    <button>Book <AiOutlineClockCircle /></button>
                  </div>
                  <hr />
                  <div className="location_main_right_item_box_child">
                    <p>Wednesday</p>
                    <span>9AM-6:30PM</span>
                    <button>Book <AiOutlineClockCircle /></button>
                  </div>
                  <hr />
                  <div className="location_main_right_item_box_child">
                    <p>Thursday</p>
                    <span>8AM-9PM</span>
                    <button>Book <AiOutlineClockCircle /></button>
                  </div>
                  <hr />
                  <div className="location_main_right_item_box_child">
                    <p> Friddaay </p>
                    <span>8AM-9PM</span>
                    <button>Book <AiOutlineClockCircle /></button>
                  </div><hr />
                  <div className="location_main_right_item_box_child">
                    <p>Saturday</p>
                    <span>Closed</span>
                    <button>Book <AiOutlineClockCircle /></button>
                  </div>
                </div>

                <h1>Need Flexible Time?</h1>
                <button>Suggest Checkup Time</button>
              </div>
            </motion.div>
          </div>
          <LocationCard />
        </div>
      </div>
    </div>
  )
}

export default Location
