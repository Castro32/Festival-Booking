import React, { useState } from "react";
import styled from "styled-components";
import { AiFillInstagram, AiFillTwitterCircle, AiFillPhone, AiOutlineWhatsApp   } from "react-icons/ai";
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
              <a href="https://www.instagram.com/cas_fide.l?">
                <AiFillInstagram className="icon" />
              </a>
              <a href="https://www.twitter.com/">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="https://wa.me/254114096574">
                <AiOutlineWhatsApp className="icon" />
              </a>
              <a href="mailto:okanga.fidel@gmail.com">
                <SiGmail className="icon" />
              </a>
              <a href="tel://+254114096574">
                <AiFillPhone  className="icon"/>
              </a>
            </div>
            
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
          <p className="footer-text">
              Privacy Policy | © {new Date().getFullYear()} Raha Festival <br />
              Designed by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="designer-link"
              >
                Cas™
              </a>
            </p>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: powderblue;
  color: #ffffff;
  padding: 1rem 0;

  .container {
    max-width: 124rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-section {
    flex: 1 1 10rem;
  }
  .footer-section .logo{
    width: 70px;
    height: 70px;
  }
  .footer-heading {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .footer-text {
    color: black;
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 0.5rem;
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
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
      font-weight: bold;
      color: #4fc0d6;
    }
  }

  .subscribe-form {
    color: black;
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
    flex: 0.5;
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
    color: green;
    margin-top: 0.5rem;
  }

  .error-message {
    color: #ff0000;
    margin-top: 0.5rem;
  }

  .contact-info {
    font-size: 16px;
    margin-bottom: 0.25rem;
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
