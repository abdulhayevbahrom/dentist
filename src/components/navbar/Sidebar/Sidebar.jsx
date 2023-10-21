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
import { BsFillBagPlusFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

function Sidebar({ closeSidebarFunc }) {
  return (
    <>
      <div className="Sidebar">
        <div className="sidebar__head">
          <Link to={"/"} className="sidebar__logo">
            <img src={navLogo} alt="Logo" />
          </Link>
          <IoMdClose className="sidebarClose" onClick={closeSidebarFunc} />
        </div>
        {/*======== SIDEBAR TOP ======= */}
        <div className="sidebar__top">
          <a className="sidebar__call" href="tel:+998932620323">
            <LiaPhoneVolumeSolid className="call__icon" />
            <span>
              +998(93)xxxxxxx <small>24/7 Emergency Phone</small>
            </span>
          </a>
          <div className="sidebar__working__days">
            <LuCalendarClock />
            <span>
              Monday-Friday
              <small>
                9:<sup>00</sup>-21:<sup>00</sup>
              </small>
            </span>
          </div>
        </div>
        {/*  SIDEBAR LINKS */}
        <div className="sidebar__links">
          <Link to={"/about"}>About</Link>
          <Link to={"/"}>Services</Link>
          <Link to={"/"}>Pages</Link>
          <Link to={"/"}>News</Link>
          <Link to={"/"}>Shop</Link>
        </div>
        {/*========= SIDEBAR BOTTOM ======== */}
        <div className="sidebar__bottom">
          {/* SIDEBAR NETWORKS */}
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
      <div onClick={closeSidebarFunc} className="overlay"></div>
    </>
  );
}

export default Sidebar;
