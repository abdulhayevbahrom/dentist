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
import { BsFillBagPlusFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

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
          <div className="navbar__top__left">
            <LiaBarsSolid onClick={openSidebarFunc} className="bar__icon" />
            <Link to={"/"} className="navbar__logo">
              <img src={navLogo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar__top__right">
            <a className="navbar__call" href="tel:+998932620323">
              <LiaPhoneVolumeSolid className="call__icon" />
              <span>
                +998(93)9119572 <small>24/7 Emergency Phone</small>
              </span>
            </a>
            <div className="working__days">
              <LuCalendarClock />
              <span>
                Monday-Friday
                <small>
                  9<sup>00</sup> - 21<sup>00</sup>
                </small>
              </span>
            </div>
          </div>
        </div>
        {/*========= NAVBAR__BOTTOM ======== */}
        <div className="navbar__bottom">
          {/*  NAVBAR LINKS */}
          <div className="nav__links">
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Pages</Link>
            <Link to={"/"}>News</Link>
            <Link to={"/"}>Shop</Link>
          </div>
          <div className="nav__bottom__right">
            {/* NAVBAR NETWORKS */}
            <div className="navbar__networks">
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
            {/* SEARCH & CART btns */}
            <div className="search__shop__icons">
              <FaSearch className="search__icon" />
              <button className="shop">
                <BsFillBagPlusFill className="shop__icon" />
                <span>0</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div onClick={closeSidebarFunc} className="overlay"></div> */}
      </div>
    </div>
  );
}

export default Navbar;
