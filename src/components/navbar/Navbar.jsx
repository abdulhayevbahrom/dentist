import { Link } from "react-router-dom";
import { useState } from "react";
import navLogo from "./denticare-logo.png";
import Sidebar from "./Sidebar/Sidebar";
import "./Navbar.css";
// ======== ICON IMPORTs  ========= \\
import {
  LiaPhoneVolumeSolid,
  LiaFacebookF,
  LiaTelegramPlane,
  LiaBarsSolid,
} from "react-icons/lia";
import { LuCalendarClock, LuInstagram } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  function openSidebarFunc() {
    setOpenSidebar(true);
  }
  function closeSidebarFunc() {
    setOpenSidebar(false);
  }
  openSidebar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="Navbar">
      <div className="container">
        {openSidebar && <Sidebar closeSidebarFunc={closeSidebarFunc} />}
        {/*======== NAVBAR__TOP ======= */}
        <div className="navbar__top">
          <div className="navbar__top__right">
            <a className="navbar__call" href="tel:+998932620323">
              <LiaPhoneVolumeSolid className="call__icon" />
              Biz bilan aloqa:
              <span>+998(93)9119572</span>
            </a>
            <div className="working__days">
              <LuCalendarClock />
              <span>
                Dushanba-Shanba:
                <small>
                  9<sup>00</sup> - 21<sup>00</sup>
                </small>
              </span>
            </div>
          </div>
          <div className="navbar__networks">
            Ijtimoiy sahifalar:
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
        {/*========= NAVBAR__BOTTOM ======== */}
        <div className="navbar__bottom">
          <div className="navbar__top__left">
            <LiaBarsSolid onClick={openSidebarFunc} className="bar__icon" />
            <Link to={"/"} className="navbar__logo">
              <img src={navLogo} alt="Logo" />
              Sadaf
            </Link>
          </div>
          {/*  NAVBAR LINKS */}
          <div className="nav__links">
            <Link to={"/about"}>Biz haqimizda</Link>
            <Link to={"/xizmatlar"}>Xizmatlar</Link>
            <Link to={"/"}>bog'lanish</Link>
          </div>
          <Link to={"/admin"} className="nav__user">
            <FaRegUser />
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
