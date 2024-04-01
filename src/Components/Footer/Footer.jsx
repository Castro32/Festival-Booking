import React, { useState } from "react";
import styled from "styled-components";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      setLoading(false);
      return;
    }

    // Simulate subscription process (can be replaced with actual logic)
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Subscription successful!");
      setEmail("");
    }, 2000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="festival logo.png" alt="footer_logo" className="logo" />
            <p className="footer-text">
              Empowering Journeys, Enchanting Memories <br />
              Discover the Heartbeat of East Africa with Us!
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/">
                <AiFillInstagram className="icon" />
              </a>
              <a href="https://www.instagram.com/">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="https://www.instagram.com/">
                <SiGmail className="icon" />
              </a>
            </div>
            <p className="footer-text">
              Privacy Policy | © {new Date().getFullYear()} Raha Festival <br />
              Designed by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://jam3s.netlify.app/"
                className="designer-link"
              >
                JAM3S.DEV
              </a>
            </p>
          </div>
          <div className="footer-section">
            <p className="footer-heading">PermaLinks</p>
            <div className="link-list">
              <Link to={"/"} className="footer-link">
                Home
              </Link>
              <Link to={"/destinations"} className="footer-link">
                Partners
              </Link>
              <Link to={"/about-us"} className="footer-link">
                FAQs
              </Link>
              <Link to={"/holiday-types"} className="footer-link">
                Past Events
              </Link>
            </div>
          </div>
          <div className="footer-section">
            <p className="footer-heading">Subscribe to our Newsletter</p>
            <div className="subscribe-form">
              <input
                type="text"
                placeholder="Enter your email"
                className="email-input"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="subscribe-button"
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </div>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="footer-section">
            <p className="footer-heading">Contacts</p>
            <p className="contact-info">+254114096574</p>
            <p className="contact-info">okanga.fidel@gmail.com</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #2e2e3a;
  color: #ffffff;
  padding: 2rem 0;

  .container {
    max-width: 124rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-section {
    flex: 1 1 20rem;
  }
  .footer-section .logo{
    width: 100px;
    height: 100px;
  }
  .footer-heading {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .footer-text {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 35px;
    transition: color 0.3s ease;

    &:hover {
      color: #4fc0d6;
    }
  }

  .footer-link {
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
      font-weight: bold;
      color: #4fc0d6;
    }
  }

  .subscribe-form {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  .email-input {
    border: 1px solid #4fc0d6;
    padding: 0.5rem;
    font-size: 16px;
    color: #000000;
    flex: 1;
  }

  .subscribe-button {
    background-color: #4fc0d6;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(79, 192, 214, 0.8);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .success-message {
    color: #00ff00;
    margin-top: 0.5rem;
  }

  .error-message {
    color: #ff0000;
    margin-top: 0.5rem;
  }

  .contact-info {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .designer-link {
    color: #4fc0d6;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 860px) {
    .footer-content {
      flex-direction: column;
      gap: 2rem;
    }

    .footer-section {
      flex: 1 1 auto;
      width: 100%;
    }

    .subscribe-form {
      flex-direction: column;
    }
  }
`;

export default Footer;
