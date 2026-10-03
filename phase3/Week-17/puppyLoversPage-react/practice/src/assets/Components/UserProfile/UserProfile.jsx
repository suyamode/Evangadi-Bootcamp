import React from "react";
import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johnnydoe",
  });
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-80 mt-3 gap-3 bg-slate-900 shadow-black text-white mx-auto px-36 rounded-2xl">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <h2>Edit User Profile</h2>
      <form className="user-profile-form bg-amber-100 p-4 rounded-lg shadow-md text-blue-950 ">
        <label htmlFor="name" className="px-2 text-2xl">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleNameChange}
          className="focus:outline-none focus:border-none focus:ring-2 focus: ring-amber-500  border-2 border-blue-950 rounded-md p-1"
        />
      </form>
    </div>
  );
}

export default UserProfile;
