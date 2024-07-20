import React from 'react';
import './App.css';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <h2>Angel Data LIVE WORK</h2>
          <p>
            The Future Of Freelancing Is Here. We provide numerous opportunities for freelancers to grow and succeed in their careers.
          </p>
        </div>
        <div className="footer-section">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Work">Work Details</a></li>
            <li><a href="/FAQs">FAQs</a></li>
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>CONTACT US</h2>
          <p>
            Address: 202, Plot No 456,<br />
            Tirumala Mansion, Kavuri Hills,<br />
            shikandra market, Hyderabad,<br />
            Telangana 500054
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 angeldata Live Work. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
