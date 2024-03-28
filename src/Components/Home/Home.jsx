import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <div className="slide" style={{backgroundImage: "url('./home1_rnkzvm.jpg')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./home4.jpeg')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./home3.jpeg')"}}></div>
        <div className="slide" style={{backgroundImage: "url('./home2.jpeg')"}}></div>
      </div>
    </div>
  );
}

export default Home;
