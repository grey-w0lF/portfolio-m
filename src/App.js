import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Homepage from "./Components/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
