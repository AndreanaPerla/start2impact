import React from "react";
import Header from "../components/Header/Header";
import Fresh from "../components/Fresh/Fresh";
import Professionals from "../components/Professionals/Professionals";
import Cta from "../components/Cta/Cta";
import Future from "../components/Future/Future";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Fresh />
      <Professionals />
      <Cta />
      <Future />
      <Footer />
    </div>
  );
}

export default Home;
