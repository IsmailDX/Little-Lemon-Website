import React, { useState } from 'react'
import './styles/BookingPage.css'
import BookingForm from './BookingForm'
import ConfirmedBooking from './ConfirmedBooking'

const BookingPage = ({ availableTimes, updateTimes }) => {
    const [isReservationConfirmed, setReservationConfirmed] = useState(false)

    const handleReservationComplete = () => {
        setReservationConfirmed(true)
    }

    return (
        <div className="Booking-section">
            {isReservationConfirmed ? <ConfirmedBooking /> : ''}
            <div className="Booking-container">
                <BookingForm
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                    onReservationComplete={handleReservationComplete}
                />
            </div>
        </div>
    )
}

export default BookingPage
