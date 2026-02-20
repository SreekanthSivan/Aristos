import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantage from "./components/Advantage";
import GlobalReach from "./components/GlobalReach";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Advantage />
      <GlobalReach />
    </>
  );
};

export default App;
