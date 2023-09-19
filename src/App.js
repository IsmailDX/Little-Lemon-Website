import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SpecialsPage from "./components/SpecialsPage";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <NavBar />

      <HomePage />

      <SpecialsPage />

      <Testimonials />
    </div>
  );
}

export default App;
