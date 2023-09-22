import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import Font from 'react-font'

const Card = ({ imageSrc, title, price, description }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="bottom-part">
                <div className="bottom-top">
                    <div id="t1">
                        <Font family="Markazi Text">
                            <h3>{title}</h3>
                        </Font>
                    </div>

                    <div id="t2">
                        <Font family="Karla">
                            <p id="price">{price}</p>
                        </Font>
                    </div>
                </div>
                <div className="bottom-bottom">
                    <Font family="Karla">
                        <p id="p-below">{description}</p>
                    </Font>
                    <div id="p-bel-containter">
                        <div>
                            <Font family="Karla">
                                <p id="p-below2">Order a delivery</p>
                            </Font>
                        </div>
                        <div>
                            <MdDeliveryDining id="deliveryIcon" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
