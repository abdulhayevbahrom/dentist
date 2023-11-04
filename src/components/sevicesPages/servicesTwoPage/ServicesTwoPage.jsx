import React, { useState } from "react";
import "./ServicesTwoPage.css";
import doctorsData from "../../../static/servicesTwoPageData";
import instagram from "../servicesImgs/instagram.png";
import facebook from "../servicesImgs/facebookIconsImg.png";
import telegram from "../servicesImgs/telegramIcon.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function ServicesTwoPage() {
  const [dataId, setDataId] = useState("");
  const [opanData, setOpanData] = useState(false);
  let year = new Date().getFullYear();

  opanData
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const setDoctorData = (id) => {
    setDataId(doctorsData?.find((i) => i.id === id));
  };

  return (
    <div className="services_page">
      <div className="services_page_title">
        <h2>Doctorlar haqida malumot</h2>
        <span>
          O'zingiga yoqqan doctorni tanlang va ular bilan bog'laning. Ular
          haqida koproq malumotga ega boling.
        </span>
      </div>
      <div className="services_page_doctors_container">
        {doctorsData.map((item, index) => (
          <div key={index} className="services_page_doctor_data_card">
            <div
              className="serces_page_doctor_img"
              style={{
                background: `url(${item.doctorImg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img src={item.doctorImg} alt="" />
            </div>
            <div className="services_doctor_data_card">
              <h2>Tish doktor</h2>
              <p>
                Ism: <span>{item.name}</span>
              </p>
              <p>
                Familiya: <span>{item.surname}</span>
              </p>
              <button
                onClick={() => setDoctorData(item.id, setOpanData(!opanData))}
              >
                Ko'roq malumot bilish
              </button>
              <div className="servicer_doctor_data_icons_card">
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
      {opanData && (
        <div className="services_doctor_data_page">
          <div className="services_doctor_container">
            <div
              className="services_doctor_img"
              style={{
                background: `url(${dataId.doctorImg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img src={dataId.doctorImg} alt="" />
            </div>
            <div className="services_doctor_data">
              <div className="service_doctor_data_close">
                <div
                  onClick={() => setOpanData(false)}
                  className="close_border"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <h2>Doctor haqida malumot</h2>
              <div className="services_doctor_item">
                <p>
                  Ismi: <span>{dataId.name}</span>
                </p>
                <p>
                  Familiyasi: <span>{dataId.surname}</span>
                </p>
                <p>
                  Qayerda o'qiganligi:{" "}
                  <span>{dataId.whereTheDoctorStudied}</span>
                </p>
                <p>
                  Bilim darajasi: <span>{dataId.levelOfKnowledge}</span>
                </p>
                <p>
                  Yili: <span>{dataId.year}</span>
                </p>
                <p>
                  Yoshi: <span>{year - dataId.year}</span>
                </p>
                <p>
                  Ish faoliyati <span>{dataId.workActivity}</span>
                </p>
                <p>
                  Ish tajribasi: <span>{dataId.workExperience}</span>
                </p>
                <p>
                  Telefon raqami <span>{dataId.phoneNumber}</span>
                </p>
                <p className="doctor_full_data">
                  Doktor haqida to'liq malumot:
                  <span>{dataId.doctorData}</span>
                </p>
                <Link to={"/schedule-an-appointment"} className="link">
                  Doktor bilan Bog'lanish
                </Link>
                <div className="doctor_link_icons">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesTwoPage;
