import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div
        style={{
          height: "2000px",
          background: "white",
          paddingTop: "100px",
          color: "white",
        }}
      >
        <h1>Scroll down to test the header effect!</h1>
      </div>
    </div>
  );
}

export default App;
