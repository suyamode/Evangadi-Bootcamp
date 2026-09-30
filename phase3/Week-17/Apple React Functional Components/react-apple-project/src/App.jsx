import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AlertSection from "./components/Alert/Alert.jsx";
import Hero from "./components/Hero/Hero.jsx";
import GridSectionOne from "./components/Grid/GridSectionOne/GridSectionOne.jsx";
import GridSectionTwo from "./components/Grid/GridSectionTwo/GridSectionTwo.jsx";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <AlertSection />
      <Hero />
      <GridSectionOne />
      <GridSectionTwo />
      <Footer />
    </>
  );
}

export default App;
