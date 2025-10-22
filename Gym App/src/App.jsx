import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { PricingPlan } from "./pages/Home/PricingPlan";
import { Footer } from "./pages/Home/Footer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing-plan" element={<PricingPlan />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
