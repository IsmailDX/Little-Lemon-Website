import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import SpecialsPage from './components/SpecialsPage'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'
import { useReducer } from 'react'
import { fetchAPI } from './components/Api'

const components = [
    <>
        <HomePage />
        <SpecialsPage />
        <Testimonials />
        <About />
        <Footer />
    </>,
]

// The reducer function that specifies how state
//should be updated based on actions.

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
                ...state,
                availableTimes: action.payload,
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {
        availableTimes: [], // Initialize availableTimes as an empty array
    })

    // Create a function to update available times based on the selected date
    const updateTimes = async (selectedDate) => {
        try {
            const times = await fetchAPI(selectedDate)
            dispatch({ type: 'UPDATE_TIMES', payload: times })
        } catch (error) {
            console.error('Error fetching available times:', error)
        }
    }

    return (
        <Router>
            <>
                <NavBar />
                <Routes>
                    <Route path="/" element={components} />
                    <Route
                        path="/BookingPage"
                        element={
                            <BookingPage
                                availableTimes={state.availableTimes}
                                updateTimes={updateTimes}
                            />
                        }
                    />
                </Routes>
            </>
        </Router>
    )
}

export default App
