import React from 'react'
import './styles/ConfirmedBooking.css'
import Font from 'react-font'

const ConfirmedBooking = (onReservationComplete) => {
    return (
        <div className="confirmation-section">
            <div className="confirmation-container">
                <h2 id="reserv" className="conf">
                    <Font family="Roboto">Reservation Confirmed!</Font>
                </h2>
                <p className="conf">
                    <Font family="Karla">
                        Thank you for choosing our restaurant!
                    </Font>
                </p>
                <p className="conf">
                    <Font family="Karla">
                        Your table has been reserved for the selected date and
                        time.
                    </Font>
                </p>
                <p className="conf">
                    <Font family="Karla">We look forward to serving you. </Font>
                </p>
                <a id="sub" href="/">
                    <button type="submit" id="submitButton2">
                        <Font family="Karla">Go Back </Font>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ConfirmedBooking
