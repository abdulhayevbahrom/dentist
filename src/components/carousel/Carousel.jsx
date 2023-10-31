import React from 'react'
import './Carousel.css'
import {TbDental} from 'react-icons/tb'
import {MdMiscellaneousServices, MdArrowRight} from 'react-icons/md'

function Carousel() {
  return (
    <div className='carousel'>
      <h2>Committed To Excellence</h2>
      <h1>Personalized & Comfortable  </h1>
      <div className="teeth">
        <div className="tooth">
          <TbDental/>
          <div className="text">
            <h3>Full Protection</h3>
            <p>Compotently parallel task researched data and process improvements </p>
          </div>
        </div>
        <div className="tooth">
          <MdMiscellaneousServices/>
          <div className="text">
            <h3>Complete Service</h3>
            <p>Collaboratively expedite quality products via client focused results</p>
          </div>
        </div>
      </div>
      <button>DentiCare Process <MdArrowRight/> </button>
    </div>
  )
}

export default Carousel
