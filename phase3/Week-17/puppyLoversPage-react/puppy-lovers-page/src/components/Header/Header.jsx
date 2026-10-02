import React from "react";
import bannerPuppy from "../../assets/images/banner-puppies.jpg";
import "./header.css";

function Header() {
  return (
    <header className="blue-bg">
      <h1>Puppy Lovers Page</h1>
      <div className="banner-image">
        <img src={bannerPuppy} alt="banner puppy" />
      </div>
    </header>
  );
}

export default Header;
