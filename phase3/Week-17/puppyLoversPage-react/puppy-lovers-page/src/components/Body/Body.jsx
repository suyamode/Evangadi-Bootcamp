import React from "react";
import "./body.css";
import puppyOne from "/src/assets/images/puppy-1.jpg";
import puppyTwo from "/src/assets/images/puppy-2.jpg";

function Body() {
  return (
    <div className="three-puppies">
      <div>
        <img src={puppyOne} alt="" />
      </div>
      <div className="missing-puppy">
        <p>Puppy missing here!!</p>
      </div>
      <div>
        <img src={puppyTwo} alt="" />
      </div>
    </div>
  );
}

export default Body;
