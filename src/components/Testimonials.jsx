import React from "react";
import "./styles/Testimonials.css";
import Me from "../assets/Me.jpg";
import Box from "./Box";
import Basha from "../assets/basha.jpg";
import Thomas from "../assets/Ismaildx.png";
import Rash from "../assets/rash.png";
import Font, { Text } from "react-font";

const Testimonials = () => {
  return (
    <div className="section3">
      <Font family="Markazi Text">
        <h3 className="section3-title">Testimonials</h3>
      </Font>
      <div className="section-container">
        <Box
          Name="Ismail Hussein"
          photo={Me}
          bottomtext="Lorem ipsum dolor sit."
        />
        <Box
          Name="Thomas Shelby"
          photo={Thomas}
          bottomtext="Lorem ipsum dolor sit."
        />
        <Box
          Name="Talaat Harb"
          photo={Basha}
          bottomtext="Lorem ipsum dolor sit."
        />
        <Box
          Name="Marcus Rashford"
          photo={Rash}
          bottomtext="Lorem ipsum dolor sit."
        />
      </div>
    </div>
  );
};

export default Testimonials;
