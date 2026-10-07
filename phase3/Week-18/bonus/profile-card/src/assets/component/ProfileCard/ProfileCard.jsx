import React from "react";

function ProfileCard({ name, age, occupation, img }) {
  return (
    <div className="profile-card">
      <img src={img} alt={name} />
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Occupation: {occupation}</h2>
    </div>
  );
}

export default ProfileCard;
