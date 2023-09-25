import React from 'react'
import './styles/Footer.css'
import Logo from '../assets/logoFooter.png'
import Font from 'react-font'

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="footer-container">
                <div id="b1">
                    <img id="footer-logo" src={Logo} alt="Logo" />
                </div>
                <div id="b2">
                    <ul>
                        <Font family="Karla">
                            <li className="topList">Doormat Navigation</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </Font>
                    </ul>
                </div>
                <div id="b3">
                    <ul>
                        <Font family="Karla">
                            <li className="topList">Contact</li>
                            <li>Address</li>
                            <li>Phone number</li>
                            <li>Email</li>
                        </Font>
                    </ul>
                </div>
                <div id="b4">
                    <ul>
                        <Font family="Karla">
                            <li className="topList">Social Media Links</li>
                            <li>Address</li>
                            <li>Phone number</li>
                            <li>Email</li>
                        </Font>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
