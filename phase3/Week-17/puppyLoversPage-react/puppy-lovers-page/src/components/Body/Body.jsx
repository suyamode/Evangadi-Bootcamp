import React from "react";
import "./body.css";
import puppyOne from "/src/assets/images/puppy-1.jpg";
import puppyTwo from "/src/assets/images/puppy-2.jpg";
import puppyThree from "/src/assets/images/puppy-3.jpg";
import puppyFour from "/src/assets/images/puppy-4.jpg";

function Body() {
  return (
    <>
      <section className="three-puppies">
        <div>
          <img src={puppyOne} alt="" />
        </div>
        <div className="missing-puppy">
          <p>Puppy missing here!!</p>
        </div>
        <div>
          <img src={puppyTwo} alt="" />
        </div>
      </section>
      <div className="more-puppies">
        <p>More Puppies</p>
      </div>
      <section class="three-puppies">
        <div>
          <img src={puppyThree} alt="" />
        </div>
        <div>
          <img src={puppyFour} alt="" />
        </div>
      </section>
    </>
  );
}

export default Body;
