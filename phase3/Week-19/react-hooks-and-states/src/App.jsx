import React from "react";
import MyCounter from "./Components/ClassBased/MyCounter/MyCounter";
import IncreaseDecreaseCount from "./Components/Functional/IncreaseDecreaseCount/IncreaseDecreaseCount";
import ThemeToggle from "./Components/Functional/ThemeToggle/ThemeToggle";
import PasswordToggle from "./Components/Functional/PasswordToggle/PasswordToggle";
import UseEffectForTitle from "./Components/Functional/UseEffectForTitle/UseEffectForTitle";

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
