import React from "react";
import "./Footer.css"; // Create this CSS file for custom styles

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ReWear. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span> | </span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <span> | </span>
        <a href="https://rewear.company/" target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </footer>
  );
}

export default Footer;
