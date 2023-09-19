import React from "react";
import "./styles/SpecialsPage.css";
import { MdDeliveryDining } from "react-icons/md";
import GreekSalad from "../assets/Greek-Salad.webp";
import Card from "./Card";
import Bruchetta from "../assets/Bruchetta.jpg";
import LemonDesert from "../assets/Lemon Dessert.jpeg";

const SpecialsPage = () => {
  return (
    <div className="section2">
      <div className="container-section2">
        <div className="s2-1">
          <h1 id="specials">Specials</h1>
          <button id="button2">Online Menu</button>
        </div>
        <div className="s2-2">
          <Card
            imageSrc={GreekSalad}
            title="Greek Salad"
            price="$12.99"
            description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <Card
            imageSrc={Bruchetta}
            title="Bruchetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          />
          <Card
            imageSrc={LemonDesert}
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialsPage;
