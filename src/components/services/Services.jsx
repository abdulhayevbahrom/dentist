import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import img1 from "./images/2023_10_21_171613.png"
import img2 from "./images/2023_10_21_171618.png"
import img3 from "./images/2023_10_21_171624.png"
import img4 from "./images/2023_10_21_171630.png"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import './Services.css'


function Services() {

  return (
    <div className='services'>
      <div className="container">

        <div className="services_top">
          <motion.div
           variants={fadeIn('right', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="services_text">
            <h3>Committed To</h3>
            <h1>Excellence</h1>
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}}  className="btn_services">
            <button>view All services <FaAngleRight /> </button>
          </motion.div>
        </div>
        <motion.div
         variants={fadeIn('up', 0.2 )}
         initial='hidden'
          whileInView={'show'}
           viewport={{once: false,amount:0.7}}  className="services_bottom">
          <div className='Seeyou_card'>
            <motion.div
             variants={fadeIn('right', 0.5 )}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false,amount:0.7}} 
            className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services.jpg" alt="img" />

              <div>
                <h1>Dental Services </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img1} alt="" />
              </div>
            </motion.div>

            <motion.div
             variants={fadeIn('right', 0.3 )}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false,amount:0.7}} 
            className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-2.jpg" alt="img" />

              <div>
                <h1>Dental Implants </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img2} alt="" />
              </div>
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.3 )}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false,amount:0.7}} 
            className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-3.jpg" alt="img" />

              <div>
                <h1>Surgery</h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>


              <div className='Seeyou_card_item_position'>
                <img src={img3} alt="" />
              </div>
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.5 )}
             initial='hidden'
              whileInView={'show'}
               viewport={{once: false,amount:0.7}} 
            className='Seeyou_card_item'>
              <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-4.jpg" alt="img" />
              <div>
                <h1>Teeth Whitening </h1>
                <p> globally harness multimedia based collabration and idea haring with backend products</p>
              </div>
              <div className='Seeyou_card_item_position'>
                <img src={img4} alt="" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
