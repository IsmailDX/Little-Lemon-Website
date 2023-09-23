import React, { useState } from 'react'
import './styles/Form.css'
import Font from 'react-font'

const BookingForm = () => {
    const [Date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [numOfGuests, setNumOfGuests] = useState('')
    const [occasion, setOccasion] = useState('Birthday')

    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]

    return (
        <form>
            <h1 id="bookh1">Booking Form</h1>
            <label htmlFor="res-date">Choose date</label>

            <input
                type="date"
                id="res-date"
                onChange={(e) => {
                    setDate(e.target.value)
                }}
            />

            <label htmlFor="res-time">Choose time</label>

            <select
                id="res-time"
                onChange={(e) => {
                    setTime(e.target.value)
                }}
            >
                {availableTimes.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>

            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(e) => {
                    setNumOfGuests(e.target.value)
                }}
            />

            <label htmlFor="occasion">Occasion</label>

            <select
                id="occasion"
                onChange={(e) => {
                    setOccasion(e.target.value)
                }}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input
                type="submit"
                value="Make Your reservation"
                id="submitButton"
            />
        </form>
    )
}

export default BookingForm
