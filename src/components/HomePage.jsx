import React from "react";
import "./styles/HomePage.css";
import Food from "../assets/Rectangle 45.png";

const HomePage = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="col1">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, eos
            tempore. Nam ut autem eaque corrupti repudiandae quae rem modi!
          </p>
          <button id="button1">Reserve a table</button>
        </div>
        <div className="imgContainer">
          <img className="food" src={Food} alt="food" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
