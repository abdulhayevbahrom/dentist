import React from 'react'
import Perfect from '../../components/perfect/Perfect'
import Services from '../../components/services/Services'
import BookDentiCare from '../../components/bookDenticare/bookDentiCare/BookDentiCare'
import Location from '../../components/contact/Location'
import DoctorInfo from '../../components/doctors/Doctor_info'

function Home() {
    return (
        <div className='home'>
            <Perfect />
            <Services />
            <DoctorInfo />
            <BookDentiCare />
            <Location />
        </div>
    )
}

export default Home
