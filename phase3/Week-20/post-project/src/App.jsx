import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./Components/Auth";
import Welcome from "./Components/Welcome"; // Or Login if that's what your file is named
import Posts from "./Components/Posts";
import SinglePost from "./Components/SinglePost";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navigation Bar */}
        <nav
          style={{
            padding: "15px",
            backgroundColor: "#f0f0f0",
            marginBottom: "20px",
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Posts List</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Welcome />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
