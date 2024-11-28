import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import FeaturedTour from "./components/FeaturedTour";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <body>
        <NavBar />
        <Hero />
        <AboutSection />
        <Services />
        <FeaturedTour />
        <Footer />
      </body>
    </div>
  );
}

export default App;
