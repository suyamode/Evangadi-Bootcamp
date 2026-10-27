import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navlinks.module.css";

function NavLinks() {
  const navItems = [
    { name: "Home", url: "/" },
    { name: "TV Shows", url: "/tv" },
    { name: "Movies", url: "/movies" },
    { name: "New & Popular", url: "/news" },
    { name: "My List", url: "/mylist" },
    { name: "Browse by Language", url: "/browse" },
  ];

  return (
    <div className={styles.container}>
      {navItems.map((navItem) => (
        <Link key={navItem.url} to={navItem.url} className={styles.navItem}>
          {navItem.name}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
