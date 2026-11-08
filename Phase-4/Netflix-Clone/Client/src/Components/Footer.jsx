import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Footer Links Columns */}
        <div className={styles.linkColumns}>
          <ul>
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Media Centre</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Service Code / Copyright */}
        <div className={styles.copyRight}>
          <p>© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
