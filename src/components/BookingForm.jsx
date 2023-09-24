import './styles/Form.css'
import { useState, useEffect } from 'react'
import { fetchAPI } from './Api'

const BookingForm = ({
    availableTimes,
    updateTimes,
    onReservationComplete,
}) => {
    const [selectedDate, setSelectedDate] = useState('')

    useEffect(() => {
        if (selectedDate) {
            fetchAPI(selectedDate)
        }
    }, [selectedDate, updateTimes])

    const handleInputChange = (name, value) => {
        if (name === 'date') {
            const selectedDateFormatted = value.split('-').reverse().join('-') // Format to 'DD-MM-YYYY'
            setSelectedDate(selectedDateFormatted)
            updateTimes(selectedDateFormatted)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onReservationComplete()
    }

    return (
        <form>
            <h1 id="bookh1">Booking Form</h1>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                onChange={(e) => {
                    handleInputChange('date', e.target.value)
                }}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                onChange={(e) => {
                    handleInputChange('time', e.target.value)
                }}
            >
                {availableTimes.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(e) => {
                    handleInputChange('numOfGuests', e.target.value)
                }}
            />

            <label htmlFor="occasion">Select Occasion</label>
            <select
                id="occasion"
                onChange={(e) => {
                    handleInputChange('occasion', e.target.value)
                }}
            >
                <option disabled selected value="">
                    Select Occasion
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input
                type="submit"
                value="Make Your Reservation"
                id="submitButton"
                onClick={handleSubmit}
            />
        </form>
    )
}

export default BookingForm
