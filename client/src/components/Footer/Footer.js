import React from "react";
import "./Footer.css"; // Importing the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>E-WASTE MANAGEMENT SYSTEM</h2>
            <p>
              Together let's reduce the production of E-waste by recycling them.
            </p>
          </div>
          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="last-section footer-section">
            <h3>CONTACT US</h3>
            <p>Email: ewastemanagementsystem@gmail.com</p>
            <p>Phone: +0123-345-6789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
