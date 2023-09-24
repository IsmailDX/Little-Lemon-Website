import React from 'react'
import './styles/ConfirmedBooking.css'

const ConfirmedBooking = (showConfirmation) => {
    return (
        <div className="confirmation-section">
            <div className="confirmation-container">
                <h2 id="reserv" className="conf">
                    Reservation Confirmed!
                </h2>
                <p className="conf">Thank you for choosing our restaurant!</p>
                <p className="conf">
                    Your table has been reserved for the selected date and time.
                </p>
                <p className="conf">We look forward to serving you.</p>
                <a id="sub" href="/">
                    <button type="submit" id="submitButton2">
                        Go Back
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ConfirmedBooking
