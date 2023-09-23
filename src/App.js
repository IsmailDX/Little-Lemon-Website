import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import SpecialsPage from './components/SpecialsPage'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'

const components = [
    <>
        <HomePage />
        <SpecialsPage />
        <Testimonials />
        <About />
        <Footer />
    </>,
]

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={components} />
                    <Route path="/BookingPage" element={<BookingPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
