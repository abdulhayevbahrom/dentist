import React from 'react'
import './Seeyou.css'

import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
function Seeyou() {
    return (
        <>
            <div className="container">

                <div className='position_image'></div>
                <div className='seeyou'>
                    <div className='seeyou_item1'>
                        <p>We Would Love To</p>
                        <h1>See You Smile</h1>
                    </div>
                    <hr />
                    <div className='seeyou_item2'>
                        <div>
                            <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Globally revolutionize global sources through interoperable services.</p>
                            <p>Appropriately communicate one-to-one technology after plug-and-play networks and worldwide potentialities.</p>
                        </div>
                        <div>
                            <p>
                                Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline.

                            </p>
                            <p>Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Dramatically mesh low-risk high-yield alignments before transparent e-tailers.</p>
                        </div>
                        <div>
                            <div>
                                <p>Client Satisfaction</p>
                                <div><p></p></div>
                            </div>
                            <div>
                                <p>Dental Success</p>
                                <div><p></p></div>
                            </div>
                            <div>
                                <p>Client Referral</p>
                                <div><p></p></div>
                            </div>
                            <div>
                                <p>Travel Satisfaction</p>
                                <div><p></p></div>
                            </div>

                        </div>
                    </div>
                </div>

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
        </>
    )
}

export default Seeyou
