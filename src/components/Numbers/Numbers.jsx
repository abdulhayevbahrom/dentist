import React from 'react'
import './Number.css'
import ima1 from '../img/ima1.png'
import ima2 from '../img/ima2.png'
import ima3 from '../img/ima3.png'
import ima4 from '../img/ima4.png'


function Numbers() {
    return (
        <div className='number'>
            <div className="container">

                <div>
                    <h2>Our Dental Service</h2>
                    <h1>In Numbers</h1>
                    <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing processes.</p>
                </div>


                <div className='number_item'>
                    <div>
                        <div>
                            <div>
                                <img src={ima1} alt="" />
                            </div>
                            <h1>99%</h1>
                            <p>Client Satisfaction</p>
                        </div>
                        <div>
                            <div>
                                <img src={ima2} alt="" />
                            </div>
                            <h1>99%</h1>
                            <p>Client Satisfaction</p>
                        </div>
                        <div>
                            <div>
                                <img src={ima3} alt="" />
                            </div>
                            <h1>99%</h1>
                            <p>Client Satisfaction</p>
                        </div>
                        <div>
                            <div>
                                <img src={ima4} alt="" />
                            </div>
                            <h1>99%</h1>
                            <p>Client Satisfaction</p>
                        </div>

                    </div>



                </div>
                <hr />

                <div className='number_bottom'>
                    <div>
                        <div>
                            <hr />
                            <p>
                                <b>"</b>DentiCare was founded in the first place to create absolutely beautiful smiles. <b>"</b></p>
                            <hr />
                        </div>
                        <div>
                            <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.</p>
                            <p>Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide potentialities.</p>
                        </div>
                        <div>
                            <p>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership.</p>
                            <p>Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products, appropriately implement visionary readiness.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Numbers
