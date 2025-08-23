import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './pages/hero/Hero';
import About from './pages/about/About';
import CourseTemplate from './pages/course/Course';
import ResourcesTemplate from './pages/resources/Resources';
import Banners from './pages/banner/Banners';
import ReviewsTemplate from './pages/reviews/Reviews';
import InstructorsTemplate from './pages/instructors/Instructors';
import Footer from './components/footer/Footer';
function App() {

  return (
    <>
     <Router>
    <div className="w-full  h-auto bg-neutral-50 flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <CourseTemplate />
      <ResourcesTemplate />
      <Banners />
      <ReviewsTemplate />
      <InstructorsTemplate />
      <Footer />
    </div>
      <Routes>
      </Routes>
     </Router>
    </>
  )
}

export default App
