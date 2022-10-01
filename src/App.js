import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import AboutPage from "./Components/AboutPage/AboutPage";
import WhatIDo from "./Components/AboutPage/WhatIDo";
import Footer from "./Components/Layout/Footer/Footer";
import Contact from "./Components/ContactPage/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="about" element={<AboutPage />}></Route>
        <Route exact path="ido" element={<WhatIDo />}></Route>
        <Route exact path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
