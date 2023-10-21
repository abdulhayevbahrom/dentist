import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import img1 from "./images/2023_10_21_171613.png"
import img2 from "./images/2023_10_21_171618.png"
import img3 from "./images/2023_10_21_171624.png"
import img4 from "./images/2023_10_21_171630.png"
import './Services.css'


function Services() {

  return (
    <div className='services'>
      <div className="container">

        <div className="services_top">
          <div className="services_text">
            <h3>Committed To</h3>
            <h1>Excellence</h1>
          </div>
          <div className="btn_services">
            <button>view All services <FaAngleRight /> </button>
          </div>
        </div>
        <div className="services_bottom">
          <div className='Seeyou_card'>
            <div className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services.jpg" alt="img" />

              <div>
                <h1>Dental Services </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img1} alt="" />
              </div>
            </div>

            <div className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-2.jpg" alt="img" />

              <div>
                <h1>Dental Implants </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img2} alt="" />
              </div>
            </div>

            <div className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-3.jpg" alt="img" />

              <div>
                <h1>Surgery</h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img3} alt="" />
              </div>
            </div>

            <div className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-4.jpg" alt="img" />
              <div>
                <h1>Teeth Whitening </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>
              <div className='Seeyou_card_item_position'>
                <img src={img4} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
