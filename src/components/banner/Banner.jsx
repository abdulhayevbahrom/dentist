import React from 'react'
import './Bannner.css'
import { AiOutlineRight } from 'react-icons/ai'
function Banner() {
    return (
        <div className='banner'>
            <h2>Care For Life</h2>
            <h1>Let Us Brighten Your Smile</h1>

            <div className='abnner_item'>
                <div className='abnner_item_icon1'>

                    <div>
                        <img src="https://media.istockphoto.com/id/1212017773/vector/dental-care-report-line-icon-tooth-inspection-analysis-and-pencil-symbol-outline-style.jpg?s=170667a&w=0&k=20&c=MwMjxhk0SVBhrZuhhm9_j5_UTQhyQYdi2nGs0rfXOOY=" alt="sdjis" />
                    </div>
                    <div>
                        <p>Implants</p>
                        <span>Dramatically maintain clicks and mortar Solution owthout functional solution </span>
                    </div>
                </div>
                <div className='abnner_item_icon2'>
                    <div>
                        <img src="https://media.istockphoto.com/id/1212017773/vector/dental-care-report-line-icon-tooth-inspection-analysis-and-pencil-symbol-outline-style.jpg?s=170667a&w=0&k=20&c=MwMjxhk0SVBhrZuhhm9_j5_UTQhyQYdi2nGs0rfXOOY=" alt="sdjis" />
                    </div>
                    <div>
                        <p>Implants</p>
                        <span>Dramatically maintain clicks and mortar Solution owthout functional solution </span>
                    </div>

                </div>
            </div>
            <button>Dental Solutions<AiOutlineRight /></button>
        </div>
    )
}

export default Banner
