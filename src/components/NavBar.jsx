import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import Logo from "../assets/logo1.png";
import Shop from "../assets/iconshop.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav>
        <div className="navbarContainer">
          {nav ? (
            <ul className="ulSmall">
              <div className="sideBar">
                <img src={Logo} className="Littlelemon2" alt="logo1" />
                <AiOutlineClose
                  className="close"
                  size={30}
                  onClick={handleClick}
                />
              </div>
              <li>
                <Link to="/home" className="nav-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/home" className="nav-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/home" className="nav-item">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/home" className="nav-item">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/home" className="nav-item">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/home" className="nav-item">
                  Login
                </Link>
              </li>
            </ul>
          ) : null}

          <AiOutlineMenu className="menu" size={30} onClick={handleClick} />
          <img src={Logo} className="Littlelemon" alt="logo1" />
          <img src={Shop} className="shopIcon" alt="shop" />
          <ul className="ulBig">
            <li>
              <Link to="/home" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
