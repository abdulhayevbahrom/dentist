import React from 'react'
import './Doctor_info.css'
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants'
import photo from './banner_left phote.jpg'
import docphoto1 from './1.jpg'
import docphoto2 from './people-02.jpg'
import docphoto3 from './people-03.jpg'
import docphoto4 from './people-04.jpg'
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import the icons

function Doctor_info() {
    return (
        <div className='doctor_info_banner'>
            <div className="container">
                <div className="doctor_info_banner_main">

                    <div className="single_doctor_info">
                        <motion.div
                         variants={fadeIn('right', 0.3 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}} 
                        className="single_doctor_info_left">
                            <p className='doctor_info_purple'>DentiCare</p>
                            <h1 className='doctor_info_main_word'>Specilized Team</h1>
                            <div className='line'></div>
                            <q><p className='doctor_little_info'>We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</p></q>
                            <div className='line'></div>
                        </motion.div>
                        <motion.div
                         variants={fadeIn('left', 0.3 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}}  className="single_doctor_info_right">
                            <img src={photo} alt="Doctor Pics" />
                        </motion.div>
                    </div>
                    <motion.div
                     variants={fadeIn('up', 0.1 )}
                     initial='hidden'
                      whileInView={'show'}
                       viewport={{once: false,amount:0.7}} 
                    className="doctor_info_cards">
                        <motion.div
                         variants={fadeIn('right', 0.5 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}} 
                        className="doctor_cards">
                            <img src={docphoto1} alt="first_doctor_pic" />
                            <b className='job'>Alex Terrel</b>
                            <div className='line_div'></div>
                            <span className='doctor_experience'>Senior Orthodontist</span><br />
                            <span className='single_doctor_info_experience'>
                                Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                            </span>
                            <div className="doctor_social_nets">
                                <FaFacebook className='facebook' /><FaYoutube className='youtube' /><FaLinkedin className='linkedin' />
                            </div>
                        </motion.div>
                        <motion.div 
                         variants={fadeIn('right', 0.3 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}} 
                        className="doctor_cards">
                            <img src={docphoto2} alt="first_doctor_pic" />
                            <b className='job'>Alex Terrel</b>
                            <div className='line_div'></div>
                            <span className='doctor_experience'>Senior Orthodontist</span><br />
                            <span className='single_doctor_info_experience'>
                                Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                            </span>
                            <div className="doctor_social_nets">
                                <FaFacebook className='facebook' /><FaYoutube className='youtube' /><FaLinkedin className='linkedin' />
                            </div>
                        </motion.div>
                        <motion.div
                         variants={fadeIn('left', 0.3 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}} 
                            className="doctor_cards">
                            <img src={docphoto3} alt="first_doctor_pic" />
                            <b className='job'>Alex Terrel</b>
                            <div className='line_div'></div>
                            <span className='doctor_experience'>Senior Orthodontist</span><br />
                            <span className='single_doctor_info_experience'>
                                Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                            </span>
                            <div className="doctor_social_nets">
                                <FaFacebook className='facebook' /><FaYoutube className='youtube' /><FaLinkedin className='linkedin' />
                            </div>
                        </motion.div>
                        <motion.div 
                         variants={fadeIn('left', 0.5 )}
                         initial='hidden'
                          whileInView={'show'}
                           viewport={{once: false,amount:0.7}} 
                            className="doctor_cards">
                            <img src={docphoto4} alt="first_doctor_pic" />
                            <b className='job'>Alex Terrel</b>
                            <div className='line_div'></div>
                            <span className='doctor_experience'>Senior Orthodontist</span><br />
                            <span className='single_doctor_info_experience'>
                                Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                            </span>
                            <div className="doctor_social_nets">
                                <FaFacebook className='facebook' /><FaYoutube className='youtube' /><FaLinkedin className='linkedin' />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Doctor_info 
