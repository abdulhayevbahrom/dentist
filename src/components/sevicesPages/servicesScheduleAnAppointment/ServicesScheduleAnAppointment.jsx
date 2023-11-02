import React, { useState } from "react";
import "./ServicesScheduleAnAppointment.css";
import { HiOutlineChevronDown, HiChevronUp } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { Link } from "react-router-dom";

function ServicesScheduleAnAppointment() {
  const [down, setDown] = useState(false);
  const [clickDown, setClickDown] = useState(false);
  const [dowlandData, setDowlandData] = useState("");
  const [timeDowlandData, setTimeDowlandData] = useState("");
  const [colendar, setColendar] = useState(new Date());
  const timeData = [
    {
      title: "8:00 ertalab",
      id: 0,
    },
    {
      title: "9:00",
      id: 1,
    },
    {
      title: "10:00",
      id: 2,
    },
    {
      title: "11:00",
      id: 3,
    },
    {
      title: "12:00",
      id: 4,
    },
    {
      title: "13:00",
      id: 5,
    },
    {
      title: "14:00",
      id: 6,
    },
    {
      title: "15:00",
      id: 7,
    },
    {
      title: "16:00",
      id: 8,
    },
  ];
  const visitData = [
    {
      title: "Dental imtihon ",
      id: 0,
    },
    {
      title: "Tish implantlari",
      id: 1,
    },
    {
      title: "Protezlar va qisman protezlar",
      id: 2,
    },
    {
      title: "Raqamli rentgen nurlari",
      id: 3,
    },
    {
      title: "Ekstraksiya",
      id: 4,
    },
    {
      title: "To'ldirishlar",
      id: 5,
    },
    {
      title: "Ftorid bilan davolash",
      id: 6,
    },
    {
      title: "Ortodontiya",
      id: 7,
    },
    {
      title: "Ildiz kanallari",
      id: 8,
    },
    {
      title: "Tishlarni oqartirish",
      id: 9,
    },
    {
      title: "Bashqa",
      id: 10,
    },
  ];

  const setInputValue = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="services_schedule_an_appointment_page">
        <div className="services_schedule_an_appointment_form_card">
          <form onSubmit={setInputValue}>
            <div className="services_schedule_an_appointment_form_title">
              <p>Uchrashuvni rejalashtirish</p>
              <h2>Asosiy ma'lumotlar</h2>
            </div>
            <div className="services_schedule_an_appointment_form_input">
              <label>Ismingiz (majburiy)</label>
              <input type="text" />
            </div>
            <div className="services_schedule_an_appointment_form_input">
              <label>Familiya (majburiy)</label>
              <input type="text" />
            </div>
            <div className="services_schedule_an_appointment_form_input">
              <label>Telefon raqami (majburiy)</label>
              <input type="tel" />
            </div>
            <div className="services_schedule_an_appointment_form_input">
              <label>Elektron pochta manzili (majburiy)</label>
              <input type="email" />
            </div>
            <div className="services_schedule_an_appointment_form_input">
              <div className="services_schedule_an_appointment_form_input_title">
                <h2>Tug'ilgan kun sanasi</h2>
              </div>
              <label>Tug'ilgan kun (majburiy)</label>
              <input type="datetime-local" className="padd" />
            </div>
            <div className="services_schedule_an_appointment_form_select">
              <div className="services_schedule_an_appointment_form_select_title">
                <h2>Istalgan sana va vaqtni tanlang</h2>
                <label>Tanlangan sana №1 (majburiy)</label>
              </div>
              <div className="form_select_card">
                <div onClick={() => setDown(!down)} className="select_btn">
                  {timeDowlandData
                    ? timeDowlandData
                    : "-- Iltimos, variant tallang --"}{" "}
                  {down ? <HiChevronUp /> : <HiOutlineChevronDown />}
                </div>
                {down && (
                  <div className="select_cart">
                    {timeData.map((item, index) => (
                      <p
                        key={index}
                        onClick={() =>
                          setTimeDowlandData(item.title, setDown(false))
                        }
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="services_schedule_an_appointment_form_select">
              <div className="services_schedule_an_appointment_form_select_title">
                <h2>Tashrifingiz sababi</h2>
                <label>Tashrifingiz sababi (majburiy)</label>
              </div>
              <div className="form_select_card">
                <div
                  onClick={() => setClickDown(!clickDown)}
                  className="select_btn"
                >
                  {dowlandData ? dowlandData : "Tozalash"}
                  {clickDown ? <HiChevronUp /> : <HiOutlineChevronDown />}
                </div>
                {clickDown && (
                  <div className="select_cart">
                    {visitData.map((item, index) => (
                      <p
                        key={index}
                        onClick={() =>
                          setDowlandData(item.title, setClickDown(false))
                        }
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="services_schedule_an_appointment_form_doctor">
              <div className="services_schedule_an_appointment_form_doctor_title">
                <h2>Shifokor uchun xabar</h2>
                <label>Xabaringiz</label>
              </div>
              <textarea cols="10" rows="10"></textarea>
            </div>
            <div className="services_schedule_an_appointment_form_btn">
              <button>Yuborish</button>
            </div>
          </form>
        </div>
        <div className="services_schedule_an_appointment_page_time_and_location">
          <div className="schedule_an_appointment_phone_number">
            <h2>Murojat uchun tel</h2>
            <span>
              <div className="schedule_an_appointment_phone_number_icon">
                <FaPhoneAlt />
              </div>
              <a href="tel:+998909976220">+99890 997-62-20</a>
            </span>
          </div>
          <div className="week_and_colendar_container">
            <div className="week_card">
              <div className="week_card_title">
                <h2>Ish kunlar va Ish vaqti</h2>
              </div>
              <ul>
                <li>
                  <b>Dushanba:</b> <i>08:00 - 17:00</i>
                </li>
                <li>
                  <b>Seshanba:</b> <i>08:00 - 19:00</i>
                </li>
                <li>
                  <b>Chorshanba:</b> <i>08:00 - 19:00</i>
                </li>
                <li>
                  <b>Payshanba:</b> <i>09:00 - 20:00</i>
                </li>
                <li>
                  <b>Juma:</b> <i>08:00 - 17:00</i>
                </li>
                <li>
                  <b>Shanba:</b> <i>08:00 - 12:00</i>
                </li>
                <li className="ul_li_border_radius">
                  <b>Yakshanba:</b> <i className="ul_li_color">Yopiq</i>
                </li>
              </ul>
            </div>
            <div className="colendar_card">
              <Calendar onChange={setColendar} defaultValue={colendar} />
            </div>
          </div>
          <div className="img_card">
            <img
              src="https://emok43qzstd.exactdn.com/wp-content/uploads/2019/10/veneers-bg-1024x683.jpg?strip=all&lossy=1&quality=75&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesScheduleAnAppointment;
