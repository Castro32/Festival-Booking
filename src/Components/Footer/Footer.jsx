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

    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



  return (
    <Container>
      <footer className="bg-[#2E2E3A]">
        <div className="container page-padding pb-[5rem] pt-[2rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8 ml-8">
              <img src="festival logo.png" alt="footer_logo" className="w-[18rem]" />
              <p className="text-[18px] font-medium text-[#FFFFFF]">
                Empowering Journeys, Enchanting Memories <br />Discover the Heartbeat of East Africa with Us!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#FFFFFF] min540:justify-center">
                <a href="https://www.instagram.com/">
                  <AiFillInstagram className="text-[35px] hover:text-[#4FC0D6]"/>
                </a>

                <a href="https://www.instagram.com/">
                  <AiFillTwitterCircle className="text-[35px] hover:text-[#4FC0D6]" />
                </a>
                
                
                
                <a href="https://www.instagram.com/">
                  <SiGmail className="text-[35px] hover:text-[#4FC0D6]" />
                </a>
                
              </div>
              <p className="text-[16px] font-medium text-[#FFFFFF]">
                Privacy Policy | © {new Date().getFullYear()} Raha Festival <br />{" "}
                Designed by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jam3s.netlify.app/"
                  class="text-[#4FC0D6] font-bold"
                >
                  JAM3S.DEV
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] text-[#FFFFFF] font-bold footer-main">PermaLinks</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#4FC0D6]"></span>
              
              <Link to={"/"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Home
                </p>
              </Link>
              
              <Link to={"/destinations"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Destinations
                </p>
              </Link>
              
              <Link to={"/holiday-types"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Holiday Types
                </p>
              </Link>
              
              <Link to={"/about-us"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  About Us
                </p>
              </Link>
              
              <Link to={"/blog"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Blog
                </p>
              </Link>
              
              <Link to={"/contact-us"}>
                <p className="text-[16px] hover:text-[#4FC0D6] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Contact Us
                </p>
              </Link>
            </div>

            {/* Subscription Div */}
            <div className="flex flex-col gap-8 relative">
      <p className="text-[22px] text-[#FFFFFF] font-bold footer-main">
        Subscribe to our Newsletter
      </p>

      <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#4FC0D6]"></span>

      <div className="flex flex-col gap-4">

  <label htmlFor="email" className="text-[16px] text-[#FFFFFF] font-medium">
    Email:
  </label>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email"
    className="border border-[#4FC0D6] rounded p-2 text-[16px] text-black" 
    onChange={handleEmailChange}
  />
</div>

      <button
        className="bg-[#4FC0D6] text-[16px] text-[#FFFFFF] py-2 px-4 rounded hover:bg-opacity-80"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Subscribe'}
      </button>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
      
  

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold text-[#FFFFFF] footer-main">Contacts</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#4FC0D6]"></span>

              <p className="text-[16px]  text-[#FFFFFF] font-bold">
                +254 722 636 346
              </p>
              <p className="text-[16px] text-[#FFFFFF] font-medium">
                africanoutbacksafaris@gmail.com
              </p>
              
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </Container>
  );
};
const Container = styled.div`

  .container {
    max-width: 124rem;
    margin: 0 auto;
  }
  &.email-text::placeholder {
    color: black;
  }

  &.email-text {
    color: black;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  @media (max-width: 597px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .columns {
      flex-direction: column;
      text-align: center;
      .iconColumn {
        flex-direction: row;
      }
    }
  }
`;






export default Footer;