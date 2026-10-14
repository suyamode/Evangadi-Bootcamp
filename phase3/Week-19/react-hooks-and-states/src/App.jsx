import React from "react";
import MyCounter from "./Components/ClassBased/MyCounter/MyCounter.jsx";
import IncreaseDecreaseCount from "./Components/Functional/IncreaseDecreaseCount/IncreaseDecreaseCount.jsx";
import ThemeToggle from "./Components/Functional/ThemeToggle/ThemeToggle.jsx";
import PasswordToggle from "./Components/Functional/PasswordToggle/PasswordToggle.jsx";
import UseEffectForTitle from "./Components/Functional/UseEffectForTitle/UseEffectForTitle.jsx";

function App() {
  return (
    <ThemeToggle>
      <div className="container">
        <MyCounter />
      </div>
      <IncreaseDecreaseCount />
      <PasswordToggle />
      <UseEffectForTitle />
    </ThemeToggle>
  );
}

export default App;
