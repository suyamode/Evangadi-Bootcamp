import React from "react";
import MyCounter from "./Components/ClassBased/MyCounter";
import IncreaseDecreaseCount from "./Components/Functional/IncreaseDecreaseCount";
import ThemeToggle from "./Components/Functional/ThemeToggle";

function App() {
  return (
    <ThemeToggle>
      <div className="container">
        <MyCounter />
      </div>
      <IncreaseDecreaseCount />
    </ThemeToggle>
  );
}

export default App;
