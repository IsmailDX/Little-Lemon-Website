import './styles/Form.css'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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

    const formik = useFormik({
        initialValues: {
            dateField: '',
            timeField: '',
            guestsField: '',
            occasionField: '',
        },
        validationSchema: Yup.object({
            dateField: Yup.string().required('Required'),
            timeField: Yup.string().required('Required'),
            guestsField: Yup.string().required('Required').max(10),
            occasionField: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            onReservationComplete()
        },
    })

    useEffect(() => {
        if (formik.values.dateField) {
            fetchAPI(formik.values.dateField)
        }
    }, [formik.values.dateField, updateTimes])

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1 id="bookh1">Booking Form</h1>

            <label htmlFor="res-date">Choose date</label>
            <div className="ChooseDiv">
                <input
                    type="date"
                    id="res-date"
                    name="dateField"
                    onChange={(e) => {
                        handleInputChange('date', e.target.value)
                        formik.handleChange(e)
                    }}
                />
                {formik.errors.dateField ? (
                    <div className="error-message">
                        {formik.errors.dateField}
                    </div>
                ) : null}
            </div>

            <label htmlFor="res-time">Choose time</label>
            <div className="ChooseDiv">
                <select
                    id="res-time"
                    name="timeField"
                    onChange={(e) => {
                        handleInputChange('time', e.target.value)
                        formik.handleChange(e)
                    }}
                >
                    <option disabled selected value="">
                        Select Time
                    </option>
                    {availableTimes.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {formik.errors.timeField ? (
                    <div className="error-message">
                        {formik.errors.timeField}
                    </div>
                ) : null}
            </div>

            <label htmlFor="guests">Number of Guests</label>
            <div className="ChooseDiv">
                <input
                    type="number"
                    placeholder="Number of guests"
                    min="1"
                    max="10"
                    id="guests"
                    name="guestsField"
                    onChange={(e) => {
                        handleInputChange('numOfGuests', e.target.value)
                        formik.handleChange(e)
                    }}
                />
                {formik.errors.guestsField ? (
                    <div className="error-message">
                        {formik.errors.guestsField}
                    </div>
                ) : null}
            </div>

            <label htmlFor="occasion">Select Occasion</label>
            <div className="ChooseDiv">
                <select
                    id="occasion"
                    name="occasionField"
                    onChange={(e) => {
                        handleInputChange('occasion', e.target.value)
                        formik.handleChange(e)
                    }}
                >
                    <option disabled selected value="">
                        Select Occasion
                    </option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {formik.errors.occasionField ? (
                    <div className="error-message">
                        {formik.errors.occasionField}
                    </div>
                ) : null}
            </div>
            <input
                type="submit"
                value="Make Your Reservation"
                id="submitButton"
                disabled={!formik.isValid}
            />
        </form>
    )
}

export default BookingForm
