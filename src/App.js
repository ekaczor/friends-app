import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import AboutMe from "./pages/home-page/AboutMe";
import ContactMePage from "./pages/home-page/ContactMePage";
import HobbiesPage from "./pages/home-page/HobbiesPage";

function App() {
  return (
    <Router>
      <Routes className="App">
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/about-me" exact element={<AboutMe/>} />
        <Route path="/hobbies" exact element={<HobbiesPage/>} />
        <Route path="/contact-me" exact element={<ContactMePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
