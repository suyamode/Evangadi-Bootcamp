import React from "react";
import ProfileCard from "./assets/component/ProfileCard/ProfileCard.jsx";
import people from "./assets/data.js";

function App() {
  return (
    <div className="wrapper">
      {people.map((person) => (
        <ProfileCard
          key={person.name}
          name={person.name}
          age={person.age}
          occupation={person.occupation}
          img={person.img}
          color={person.color}
        />
      ))}
    </div>
  );
}

export default App;
