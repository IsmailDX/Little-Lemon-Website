import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SpecialsPage from "./components/SpecialsPage";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />

      <HomePage />

      <SpecialsPage />

      <Testimonials />

      <About />

      <Footer />
    </div>
  );
}

export default App;
