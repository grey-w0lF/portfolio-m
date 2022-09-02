import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import AboutPage from "./Components/AboutPage/AboutPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="about" element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
