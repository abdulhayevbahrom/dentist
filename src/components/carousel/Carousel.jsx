import React from 'react'
import './Carousel.css'
import {TbDental} from 'react-icons/tb'
import {MdMiscellaneousServices, MdArrowRight} from 'react-icons/md'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

function Carousel() {
  return (
    <div className='carousel'>
      <motion.div
       variants={fadeIn('down', 0.3 )}
       initial='hidden'
        whileInView={'show'}
         viewport={{once: false,amount:0.7}} 
      className="container">
      <h2>Committed To Excellence</h2>
      <h1>Personalized & Comfortable  </h1>
      <div className="teeth">
        <div className="tooth">
          <TbDental/>
          <motion.div
           variants={fadeIn('right', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} 
          className="text">
            <h3>Full Protection</h3>
            <p>Compotently parallel task researched data and process improvements </p>
          </motion.div>
        </div>
        <div className="tooth">
          <MdMiscellaneousServices/>
          <motion.div
           variants={fadeIn('left', 0.3 )}
           initial='hidden'
            whileInView={'show'}
             viewport={{once: false,amount:0.7}} className="text">
            <h3>Complete Service</h3>
            <p>Collaboratively expedite quality products via client focused results</p>
          </motion.div>
        </div>
      </div>
      <button>DentiCare Process <MdArrowRight/> </button>
      </motion.div>
    </div>
  )
}

export default Carousel
