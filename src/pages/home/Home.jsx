import React from 'react'
import Perfect from '../../components/perfect/Perfect'
import Services from '../../components/services/Services'
import BookDentiCare from '../../components/bookDenticare/BookDentiCare'
import Location from '../../components/contact/Location'
import DoctorInfo from '../../components/doctors/Doctor_info'
import Carousel from '../../components/carousel/Carousel'

function Home() {
    return (
        <div className='home'>
            <Carousel/>
            <Perfect />
            <Services />
            <DoctorInfo />
            <BookDentiCare />
            <Location />
        </div>
    )
}

export default Home
