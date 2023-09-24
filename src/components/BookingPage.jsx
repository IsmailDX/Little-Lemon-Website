import React from 'react'
import './styles/BookingPage.css'
import BookingForm from './BookingForm'
import ConfirmedBooking from './ConfirmedBooking'
import { useState } from 'react'

const BookingPage = ({ availableTimes, updateTimes }) => {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const handleReservationComplete = () => {
        setShowConfirmation(true)
    }
    return (
        <div className="Booking-section">
            {showConfirmation && <ConfirmedBooking />}
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
