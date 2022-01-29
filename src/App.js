import React from "react";
import SignUp from "./LoginSection/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginSection/Login";
import Home from "./Home/Home";
import Vark from "./Home/Vark";
import SkillAssesment from "./Home/SkillAssesment";
import Pricing from "./Home/Pricing";
import Assessment from "./Home/Assessment";
import VarkAssesment from "./Home/VarkAssesment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/varklearning" element={<Vark />} />
          <Route exact path="/vassesment" element={<VarkAssesment />} />
          <Route exact path="/skillassesment" element={<SkillAssesment />} />
          <Route exact path="/assesment" element={<Assessment />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
