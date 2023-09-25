import React, { useState } from 'react'
import './styles/Navbar.css'
import Logo from '../assets/logo1.png'
import Shop from '../assets/iconshop.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Font from 'react-font'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)

    const links = [
        {
            text: 'Home',
            link: '/#home',
        },
        {
            text: 'Menu',
            link: '/#menu',
        },
        {
            text: 'Testimonials',
            link: '/#testimonials',
        },
        {
            text: 'About',
            link: '#about',
        },

        {
            text: 'Contact',
            link: '/#contact',
        },
    ]

    return (
        <div>
            <nav>
                <div className="navbarContainer">
                    <ul
                        className={`ulSmall nav ${
                            isOpen ? 'nav-open' : 'nav-close'
                        }`}
                    >
                        <div className="sideBar">
                            <a href="/">
                                <img
                                    src={Logo}
                                    className="Littlelemon2"
                                    alt="logo1"
                                />
                            </a>
                            <AiOutlineClose
                                className="close"
                                size={30}
                                onClick={() => setOpen((prev) => !prev)}
                            />
                        </div>
                        {links.map((link) => {
                            return (
                                <li className="nav-item">
                                    <a href={link.link} className="nav-item">
                                        <Font family="Karla" weight={700}>
                                            {link.text}
                                        </Font>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <AiOutlineMenu
                        className="menu"
                        size={30}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <a href="/">
                        <img src={Logo} className="Littlelemon" alt="logo1" />
                    </a>
                    <img src={Shop} className="shopIcon" alt="shop" />

                    <ul className="ulBig">
                        {links.map((link) => {
                            return (
                                <li>
                                    <a href={link.link} className="nav-item">
                                        <Font family="Karla" weight={700}>
                                            {link.text}
                                        </Font>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
