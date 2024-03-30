import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <div className="slide" style={{backgroundImage: "url('./Screenshot.png')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./pexel3.jpg')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./pexe;2.jpg')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./pexel.jpg')"}}></div>
      </div>
    </div>
  );
}

export default Home;
