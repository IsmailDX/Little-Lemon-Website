import React from 'react'
import Font from 'react-font'

const Box = ({ Name, photo, bottomtext }) => {
    return (
        <div className="box1">
            <div className="box2">
                <div className="col-1-box">
                    <Font family="Karla">
                        <p className="Rating">Rating</p>
                    </Font>
                    <div className="img-container1 ">
                        <img id="me" src={photo} alt="Me" />
                    </div>
                </div>
                <div className="col-2-box">
                    <p className="Rating"></p>
                    <Font family="Karla">
                        <p className="Name">{Name}</p>
                    </Font>
                </div>
            </div>
            <Font family="Karla">
                <p className="bottom-text">{bottomtext}</p>
            </Font>
        </div>
    )
}

export default Box
