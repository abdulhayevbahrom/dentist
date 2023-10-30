import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./Sidebar.css";
import navLogo from "../denticare-logo.png";
// ======== ICON IMPORTs  ========= \\
import {
  LiaPhoneVolumeSolid,
  LiaFacebookF,
  LiaTelegramPlane,
} from "react-icons/lia";
import { LuCalendarClock, LuInstagram } from "react-icons/lu";
import {
  MdOutlineMedicalServices} from "react-icons/md";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";

function Sidebar({ closeSidebarFunc }) {
  return (
    <>
      <div className="Sidebar">
        <div className="sidebar__head">
          <Link to={"/"} className="sidebar__logo">
            <img src={navLogo} alt="Logo" /> SADAF
          </Link>
          <IoMdClose className="sidebarClose" onClick={closeSidebarFunc} />
        </div>

        {/*  SIDEBAR LINKS */}
        <div className="sidebar__links">
          <button className="sidebar__user"><FaRegUser/> Kirish </button>
          <Link to={"/about"}>
            {" "}
            <FcAbout /> biz haqimizda
          </Link>
          <Link to={"/"}>
            <MdOutlineMedicalServices className="service__icon" /> xizmatlar
          </Link>
          <Link to={"/"}>
            {" "}
            <FcBusinessContact /> bog'lanish
          </Link>
        </div>
        {/*======== SIDEBAR TOP ======= */}
        <div className="sidebar__top">
          <div className="sidebar__working__days">
            <LuCalendarClock />
            <span>
              Dushanba-Shanba: 9<sup>00</sup> - 21<sup>00</sup>
            </span>
          </div>
          <a className="sidebar__call" href="tel:+998932620323">
            <LiaPhoneVolumeSolid className="call__icon" />
            <span>+998(93)9119572</span>
          </a>
        </div>
        {/*========= SIDEBAR BOTTOM ======== */}
        <div className="sidebar__bottom">
          {/* SIDEBAR NETWORKS */}
          <div className="sidebar__networks">
            <a href="https://instagram.com">
              <LuInstagram />
            </a>
            <a href="https://facebook.com">
              <LiaFacebookF />
            </a>
            <a href="https://t.me">
              <LiaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
      <div onClick={closeSidebarFunc} className="overlay"></div>
    </>
  );
}

export default Sidebar;
