import React from "react";
import "./ServicesThreePage.css";
import toothDAta from "../../../static/ServicesThreePageData";
import { Link } from "react-router-dom";
import instagram from "../servicesImgs/instagram.png";
import facebook from "../servicesImgs/facebookIconsImg.png";
import telegram from "../servicesImgs/telegramIcon.png";

function ServicesThreePage() {
  return (
    <div className="container">
      <div className="services_three_page">
        <div className="services_three_page_title">
          <h2>Tish tuzatish</h2>
        </div>
        <div className="services_three_page_tooth_container">
          {toothDAta?.map((item, index) => (
            <div className="services_three_page_tooth_card">
              <div
                className="services_three_page_tooth_card_img"
                style={{
                  background:
                    "url(https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img src={item.toothImg} alt="" />
              </div>
              <div className="services_three_page_tooth_card_data">
                <h2>{item.toothTitle}</h2>
                <button>To'liq malumot</button>
                <div className="services_three_page_tooth_card_icons">
                  <Link>
                    <img src={instagram} alt="" />
                  </Link>
                  <Link>
                    <img src={facebook} alt="" />
                  </Link>
                  <Link>
                    <img src={telegram} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesThreePage;
