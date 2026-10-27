import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import netflixLogo from "../assets/image/logo.png";
import NavLinks from "./NavLinks";
import styles from "../styles/header.module.css";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(scroll, handleScroll);
  }, []);
  return (
    <header>
      <div className="d-flex align-items-center justify-content-between container-fluid">
        {/* Left Side Links */}
        <div className="d-flex justify-center container-fluid">
          <Link to="/">
            <img src={netflixLogo} alt="" className="w-25" />
          </Link>
          {/* Nav Links */}
          <div>
            <NavLinks />
          </div>
        </div>
        {/* Right Side Links */}
        <div claasName="d-flex">
          {/* Search Container */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search size={20} />
          </button>
          {isSearchOpen && (
            <div>
              <input type="text" placeholder="movie name" />
            </div>
          )}
        </div>
        <div>
          {/* Notifcation */}
          <button>
            <Bell size={20} />
            <span className="translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New notifications</span>
            </span>
          </button>
        </div>
        <div>
          {/* Profile Avatar */}
          <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <div>
              <User size={20} />
            </div>
            <ChevronDown size={20} />
          </button>
          {isProfileOpen && (
            <div>
              <Link to="#">Account</Link>
              <Link to="#">Help Center</Link>
              <button>Log Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
