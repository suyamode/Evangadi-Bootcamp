import "./App.css";
import "./assets/css/bootstrap.css";
import React from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout.jsx";
import AlertSection from "./components/Alert/Alert.jsx";
import Hero from "./components/Hero/Hero.jsx";
import GridSectionOne from "./components/Grid/GridSectionOne/GridSectionOne.jsx";
import GridSectionTwo from "./components/Grid/GridSectionTwo/GridSectionTwo.jsx";
import SingleAppleProduct from "./components/SingleAppleProduct/SingleAppleProduct.jsx";
import Iphone from "./components/Iphone/Iphone.jsx";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos.jsx";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour.jsx";
function App() {
  return (
    <Routes>
      {/* Parent route renders the SharedLayout wrapper */}
      <Route path="/" element={<SharedLayout />}>
        {/* Index route acts as the homepage */}
        <Route
          index
          element={
            <>
              <AlertSection />
              <Hero />
              <GridSectionOne />
              <GridSectionTwo />
              {/* <YoutubeVideos /> */}
            </>
          }
        />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:id" element={<SingleAppleProduct />} />
        <Route path="*" element={<FourZeroFour />} />
      </Route>
    </Routes>
  );
}

export default App;
