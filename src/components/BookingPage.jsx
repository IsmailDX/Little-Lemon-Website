import React from 'react'
import './styles/BookingPage.css'
import BookingForm from './BookingForm'

const BookingPage = ({ availableTimes, updateTimes }) => {
    return (
        <div className="Booking-section">
            <div className="Booking-container">
                <BookingForm
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                />
            </div>
        </div>
    )
}

export default BookingPage
