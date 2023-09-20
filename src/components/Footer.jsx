import React from "react";
import "./styles/Footer.css";
import Logo from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div id="b1">
          <img id="footer-logo" src={Logo} alt="Logo" />
        </div>
        <div id="b2">
          <ul>
            <li className="topList">Doormat Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div id="b3">
          <ul>
            <li className="topList">Contact</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div id="b4">
          <ul>
            <li className="topList">Social Media Links</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
