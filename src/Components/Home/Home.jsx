import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <div className="slide" style={{backgroundImage: "url('./Screenshot.png')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./Screenshot2.png')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./Screenshot3.png')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./home2.jpeg')"}}></div>
      </div>
    </div>
  );
}

export default Home;
