import React from "react";
import "./styles/About.css";
import Restaurant from "../assets/restaurant.jpg";
import Chicago from "../assets/chicago.jpg";

const About = () => {
  return (
    <div className="section4">
      <div className="s4-container">
        <div className="section4-col1">
          <h1 id="s4-title">Little Lemon</h1>
          <h3 id="s4-subtitle">Chicago</h3>
          <p id="s4-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
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
  );
};

export default About;