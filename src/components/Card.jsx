import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const Card = ({ imageSrc, title, price, description }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="bottom-part">
        <div className="bottom-top">
          <div id="t1">
            <h3>{title}</h3>
          </div>
          <div id="t1">
            <p id="price">{price}</p>
          </div>
        </div>
        <div className="bottom-bottom">
          <p id="p-below">{description}</p>
          <div id="p-bel-containter">
            <div>
              <p id="p-below2">Order a delivery</p>
            </div>
            <div>
              <MdDeliveryDining id="deliveryIcon" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
