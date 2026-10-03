import React from "react";

import UserProfile from "./assets/Components/UserProfile/UserProfile.jsx";
import OTPGenerator from "./assets/Components/OTPGenerator.jsx";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen mt-3 gap-3 bg-slate-800 text-white mx-auto px-36 ">
      <UserProfile />
      <OTPGenerator />
    </div>
  );
}

export default App;
