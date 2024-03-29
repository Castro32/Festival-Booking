import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link, /* useLocation  */} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
/* import useLocalStorage from "use-local-storage"; */

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  const [pos, setPos] = useState("top");
  const logoStyle = {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '20px',
    left: '20px',
};


 /*  const [ route,  setRoute] = useState("/"); */

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      // Clean up the event listener when the component unmounts
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const handleScroll = () => {
    let scrolled = window.scrollY;
    if (scrolled >= 5) {
      setPos("moved");
    } else {
      setPos("top");
    }
  };

 /*  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    setRoute(pathName);
  }, [location]); */

  useEffect(() => {
    // Scroll to the top when the activeTab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    
    <Container
    
      style={{
        backgroundColor:
          pos === "top" ? "rgba(0, 0, 0, 0)" : "rgb(255, 255, 255)",
      }}
    >
      <img src="festival logo.png" alt="Festival Logo" style={logoStyle}>
        </img>

      <div className={toggle ? "blur active" : "blur"}></div>

      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        
        <Link to={"/"} className="link-styles">
          <li
            className={activeTab === "home" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
        </Link>
        
        
        
        <Link to={"/faqs"} className="link-styles">
          <li
            className={
              activeTab === "holiday-types" ? "activeTab" : "nonActive"
            }
            onClick={() => setActiveTab("holiday-types")}
          >
          FAQS
          </li>
        </Link>
        
        

        <Link to={"/contact"} className="link-styles">
          <li
            className={activeTab === "contact" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </li>
        </Link>
        <div className="buttons">
           <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("book-now")}
          >
            <button>Buy Ticket!</button>
          </Link>
          {/* <Link to={"/log-in"}>
            <button>Log In</button>
          </Link> */}
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 95px;
  width: 90%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  .logo {
    width: 270px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      transition: 0.3s;
      cursor: pointer;
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 700;
    }
    .buttons {
      display: flex;
      gap: 7px;
      button {
        padding: 10px 14px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: #333333;
        color: white;
        border-radius: 7px;
        :hover {
          background: var(--primaryColorDark);
          transition: 0.3s;
          cursor: pointer;
          :nth-child(2) {
            background-color: var(--secondaryBackgroundColor);
          }
        }
      }
    }
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    color: #2b2b2b;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .blur {
      width: 100%;
      height: 230vh;
      backdrop-filter: blur(10px);
      position: absolute;
      left: -100%;
      z-index: 9;
    }
    .blur.active {
      left: -1em;
      width: 70%;
    }
    .nav-menu {
      background-color: white;
      width: 70%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 1%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      box-shadow: -10px 10px 18px #bfbfbf, 10px -10px 18px #ffffff;
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 1%;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 200px;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;