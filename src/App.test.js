import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // For better matchers

// Import the component you want to test and any other dependencies
import BookingForm from './components/BookingForm' // Make sure the path is correct
import { initializeTimes, updateTimes } from './components/BookingForm'

// Now, write your tests
describe('initializeTimes function', () => {
    it('should return the initial available times', () => {
        const expectedTimes = [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
        ]
        expect(initializeTimes()).toEqual(expectedTimes)
    })
})

describe('updateTimes function', () => {
    it('should return the same value provided in the state', () => {
        const selectedDate = new Date('2023-09-25') // Replace with your desired date
        const state = {
            availableTimes: ['08:00', '09:00', '10:00'],
        }

        const updatedTimes = updateTimes(selectedDate, state)
        expect(updatedTimes).toEqual(state.availableTimes)
    })
})
