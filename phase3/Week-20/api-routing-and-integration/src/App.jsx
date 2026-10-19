import "./App.css";
import "./assets/css/bootstrap.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AlertSection from "./components/Alert/Alert.jsx";
import Hero from "./components/Hero/Hero.jsx";
import GridSectionOne from "./components/Grid/GridSectionOne/GridSectionOne.jsx";
import GridSectionTwo from "./components/Grid/GridSectionTwo/GridSectionTwo.jsx";
import React from "react";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos.jsx";
import { Route, Routes } from "react-router";
import SingleAppleProduct from "./components/SingleAppleProduct/SingleAppleProduct.jsx";
import Iphone from "./components/Iphone/Iphone.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AlertSection />
              <Hero />
              <GridSectionOne />
              <GridSectionTwo />
              {/* <YoutubeVideos /> */}
            </>
          }
        ></Route>
        <Route path="/iPhone" element={<Iphone />} />
        {/* Question 3 Route: Dynamic route to display a single Apple product based on its URL/ID */}
        <Route path="/iphone/:id" element={<SingleAppleProduct />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
