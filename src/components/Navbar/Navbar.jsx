import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);

  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="./netflix-image.png" alt="" />
          <Link className="links" to="/">
            <span>Home</span>
          </Link>

          <Link className="links" to="/series">
            <span>Series</span>
          </Link>

          <Link className="links" to="/movies">
            <span>Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My Lists</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsIcon className="icon" />
          <AccountCircleIcon className="icon" />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
