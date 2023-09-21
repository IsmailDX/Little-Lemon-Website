import React from "react";

const ListItem = ({ imageSrc, title, price, description }) => {
  return (
    <div className="s2-3">
      <div className="mobile-list">
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
      <div className="img-container2">
        <img src={imageSrc} alt="img" />
      </div>
    </div>
  );
};

export default ListItem;
