import React from "react";
import "./ServicesOnePage.css";
import help from "../servicesImgs/portrait-of-dentist.jpg";
import iconImg from "../servicesImgs/dental-report_9636183.png";
import instagram from "../servicesImgs/instagram.png";
import telegram from "../servicesImgs/telegramIcon.png";
import facebook from "../servicesImgs/facebookIconsImg.png";
import { Link } from "react-router-dom";

function ServicesOnePage() {
  return (
    <div className="container">
      <div className="services_help_page">
        <div className="services_help_card">
          <div className="services_help_img_icons">
            <img src={iconImg} alt="" />
          </div>
          <h2>HOW CAN WE HELP YOU TODAY?</h2>
          <Link>SCHEDULE AN APPOINTMENT</Link>
          <div className="services_links_icon_img_border">
            <Link className="services_link_img_icons">
              <img src={instagram} alt="" />
            </Link>
            <Link className="services_link_img_icons">
              <img src={facebook} alt="" />
            </Link>
            <Link className="services_link_img_icons">
              <img src={telegram} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOnePage;
