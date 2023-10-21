import React from 'react'
import './DentiCare.css'
function DentiCare() {
    return (
        <div className='denticare'>
            <div className="container">
                <div className="denticare_main">

                    <div className="denticare_left">
                        <h2>
                            Book Your Visit At</h2>
                        <h1>DentiCare</h1>
                        <p>Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
                        <hr />
                        <form>
                            <div>
                                <p>Your Name <span>*</span></p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Your Name <span>*</span></p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Your Name <span>*</span></p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Your Name <span>*</span></p>
                                <input type="date" placeholder='Appointment date' />
                            </div>
                            <button>Book Appointment Now</button>

                        </form>
                    </div>
                    <div className="denticare_right">
                        <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="ddsd" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DentiCare
