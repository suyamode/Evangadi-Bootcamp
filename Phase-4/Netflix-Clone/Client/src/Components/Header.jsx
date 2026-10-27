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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-fluid px-4 px-md-5 d-flex align-items-center justify-content-between">
        {/* Left Side: Logo + Nav Links */}
        <div className="d-flex align-items-center gap-4">
          <Link to="/">
            <img src={netflixLogo} alt="Netflix Logo" className={styles.logo} />
          </Link>
          <div className="d-none d-lg-block">
            <NavLinks />
          </div>
        </div>

        {/* Right Side: Search, Notifications, Profile Avatar */}
        <div className="d-flex align-items-center gap-3 text-white">
          {/* Expandable Search Input */}
          <div className="d-flex align-items-center gap-2">
            <button
              className={styles.iconBtn}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Titles, people, genres"
                className={styles.searchInput}
                autoFocus
              />
            )}
          </div>

          {/* Notification Bell */}
          <div>
            <button
              className={`position-relative ${styles.iconBtn}`}
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New notifications</span>
              </span>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="position-relative">
            <button
              className={`d-flex align-items-center gap-1 ${styles.iconBtn}`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className={styles.profileBox}>
                <User size={18} className="text-secondary" />
              </div>
              <ChevronDown size={14} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link to="/account">Account</Link>
                <Link to="/help">Help Center</Link>
                <hr className="my-1 border-secondary" />
                <button type="button">Sign out of Netflix</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
