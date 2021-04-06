import React from "react";
import Header from "../components/Header";
import Fresh from "../components/Fresh";
import Professionals from "../components/Professionals";
import Cta from "../components/Cta";
import Future from "../components/Future";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
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
