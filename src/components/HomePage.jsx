import React from "react";
import "./styles/HomePage.css";
import Font, { Text } from "react-font";
import Food from "../assets/Rectangle 45.png";

const HomePage = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="col1">
          <Font family="Roboto">
            <h1>Little Lemon</h1>
          </Font>
          <Font family="Markazi Text">
            <h4>Chicago</h4>
          </Font>
          <Font family="Karla">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              eos tempore. Nam ut autem eaque corrupti repudiandae quae rem
              modi!
            </p>
          </Font>
          <Font family="Roboto">
            <button id="button1">Reserve a table</button>
          </Font>
        </div>
        <div className="imgContainer">
          <img className="food" src={Food} alt="food" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
