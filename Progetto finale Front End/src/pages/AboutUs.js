import React from "react";
import Intro from "../components/Intro/Intro";
import Mission from "../components/Mission/Mission";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function AboutUs() {
  return (
    <div className="about">
      <Navbar />
      <Intro />
      <Mission />
      <Footer />
    </div>
  );
}

export default AboutUs;
