import React from "react";
import MyCounter from "./Components/ClassBased/MyCounter";
import IncreaseDecreaseCount from "./Components/Functional/IncreaseDecreaseCount";
import ThemeToggle from "./Components/Functional/ThemeToggle";
import PasswordToggle from "./Components/Functional/PasswordToggle";
import UseEffectForTitle from "./Components/Functional/UseEffectForTitle";

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
