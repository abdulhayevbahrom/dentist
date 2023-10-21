import React from 'react'
import './Location.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import LocationCard from './LocationCard'

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
            <div className="location_main_left">

            </div>
            <div className="location_main_right">
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
            </div>
          </div>
          <LocationCard />
        </div>
      </div>
    </div>
  )
}

export default Location
