import React, { useEffect, useState } from 'react'
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
            text: 'About',
            link: '#about',
        },
        {
            text: 'Menu',
            link: '/#menu',
        },
        {
            text: ' Reservations',
            link: '/#reservations',
        },
        {
            text: ' Order Online',
            link: '/#order',
        },
        {
            text: ' Login',
            link: '/#login',
        },
    ]

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

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
                            <img
                                src={Logo}
                                className="Littlelemon2"
                                alt="logo1"
                            />
                            <AiOutlineClose
                                className="close"
                                size={30}
                                onClick={() => setOpen((prev) => !prev)}
                            />
                        </div>
                        {links.map((link) => {
                            return (
                                <li
                                    onClick={() => scrollTo(link.link)}
                                    className="nav-item"
                                >
                                    {link.text}
                                </li>
                            )
                        })}
                    </ul>

                    <AiOutlineMenu
                        className="menu"
                        size={30}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <img src={Logo} className="Littlelemon" alt="logo1" />
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
