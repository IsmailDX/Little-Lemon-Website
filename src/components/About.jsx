import React from 'react'
import './styles/About.css'
import Restaurant from '../assets/restaurant.jpg'
import Chicago from '../assets/chicago.jpg'
import Font from 'react-font'

const About = () => {
    return (
        <div className="section4" id="about">
            <div className="s4-container">
                <div className="section4-col1">
                    <Font family="Markazi Text">
                        <h1 id="s4-title">Little Lemon</h1>
                        <h3 id="s4-subtitle">Chicago</h3>
                    </Font>
                    <Font family="Karla">
                        <p id="s4-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                    </Font>
                </div>
                <div className="section4-col2">
                    <div className="s4-img-container">
                        <img
                            className="s4-img"
                            id="chicago"
                            src={Chicago}
                            alt="Restaurant"
                        />
                        <img
                            className="s4-img"
                            id="restaurant"
                            src={Restaurant}
                            alt="Restaurant"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
