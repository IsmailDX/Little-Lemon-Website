import React from "react";

const Box = ({ Name, photo, bottomtext }) => {
  return (
    <div className="box1">
      <div className="box2">
        <div className="col-1-box">
          <p className="Rating">Rating</p>
          <div className="img-container1 ">
            <img id="me" src={photo} alt="Me" />
          </div>
        </div>
        <div className="col-2-box">
          <p className="Name">{Name}</p>
        </div>
      </div>
      <p className="bottom-text">{bottomtext}</p>
    </div>
  );
};

export default Box;
