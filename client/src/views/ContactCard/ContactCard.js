import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ContactCard.css";

function ContactCard() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-form">
        <p className="massage-contact">Send us a message</p>
        <p className="welcome-line">WE WELCOME YOU, VISIT US ANYTIME</p>
        <form action="https://formspree.io/f/mjvnqkww" method="POST">
          <input type="text" className="input-field" name="username" required placeholder="Your Name" />
          <input type="email" className="input-field" name="Email" autoComplete="off" required placeholder="Your Email" />
          <textarea className="input-field textarea" name="message" required autoComplete="off" placeholder="Message"></textarea>
          <button type="submit" className="msg-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactCard;
