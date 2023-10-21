import React from 'react'
import './Footer.css'
import { FaPhoneAlt, FaGlobeAmericas, FaPinterestP } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import footerImg from './img/footer_img.png'

function Footer() {

  return (
    <footer className='footer_page'>
      <div className="container">
        <div className="footer_main">

          <div className="footer_item_container">
            <h2>Denti <span>Care</span></h2>
            <p className='footer_dents_p_text'>A team of dentists working to ensure you receive the best treatment.</p>
            <ul className='footer_ul_denti'>
              <li className='footer_denti_li_links'><a className='footer_denti_a_link' href="tel:+998909976220"><FaPhoneAlt /> +99890-997-62-20</a></li>
              <li className='footer_denti_li_links'><a className='footer_denti_a_link' href="mailto:muhammdsolehturgunov1@gmail.com"><MdEmail /> @gmail.com</a></li>
              <li className='footer_denti_li_links'><a className='footer_denti_a_link' href="/"><FaGlobeAmericas /> denticare.com</a></li>
            </ul>
          </div>
          <div className="footer_item_container footer_about_container">
            <h2>About</h2>
            <ul className='footer_ul_about'>
              <li className="footer_about_li_links"><a className='foeter_about_a_link' href="/">Our Dental Team</a></li>
              <li className="footer_about_li_links"><a className='foeter_about_a_link' href="/">Pricing & Pricelist</a></li>
              <li className="footer_about_li_links"><a className='foeter_about_a_link' href="/">Solutions</a></li>
              <li className="footer_about_li_links"><a className='foeter_about_a_link' href="/">Dental Services</a></li>
              <li className="footer_about_li_links"><a className='foeter_about_a_link' href="/">Clients</a></li>
            </ul>
          </div>
          <div className="footer_item_container footer_our_width_container">
            <h2>Our Awards</h2>
            <div className="footer_background_img_container">
              <span className='footer_our_span_text'>DentiCare is a multiple award winner</span>
              <ul className='footer_ul_our'>
                <li className='footer_our_li_text'><p className='footer_our_p_text'>Best Patient Care <b>2017</b></p></li>
                <li className='footer_our_li_text'><p className='footer_our_p_text'>Best Practice & Team <b>2016</b></p></li>
                <li className='footer_our_li_text'><p className='footer_our_p_text'>Best Patient Care <b>2014</b></p></li>
              </ul>
            </div>
          </div>
          <div className="footer_item_container">
            <h2>Social Networks</h2>
            <p className='footer_social_networks_p_text'>Visit DentiCare on these social links and connect with us. Make sure to follow our accounts for regular updates.</p>
            <div className="footer_icons_container">
              <div className="footer_link_btn_botder facebook">
                <a className="footer_links_icon " href="/"><BiLogoFacebook /></a>
                <span>Facebook</span>
              </div>
              <div className="footer_link_btn_botder twitter">
                <a className="footer_links_icon " href="/"><AiOutlineTwitter /></a>
                <span>Twitter</span>
              </div>
              <div className="footer_link_btn_botder linkedin">
                <a className="footer_links_icon " href="/"><BiLogoLinkedin /></a>
                <span>Linkedin</span>
              </div>
              <div className="footer_link_btn_botder pinterest">
                <a className="footer_links_icon " href="/"><FaPinterestP /></a>
                <span>Pinterest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
