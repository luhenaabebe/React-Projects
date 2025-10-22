import React from "react";
import Hero from "./Hero";
import { About } from "./About";
import { Bmi } from "./Bmi";
import { Services } from "./Services";
import { Banner } from "./Banner";
import { Trainers } from "./Trainers";
import { Popular } from "./Popular";
import { PricingPlan } from "./PricingPlan";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
       <Hero />
       <About />
       <Bmi />
       <Services />
       <Banner />
       <Trainers />
       <Popular />
       
       <Contact />
     
      </div>
    </>
  );
};

export default Home;
