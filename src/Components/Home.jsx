import React from 'react';
import './Home.css';
import mainVdo from "../assets/Lodha_World's_Finest 16-9_07.mp4"

const Home = () => {
  return (
    <div className="home">
      <div className="video-container">
        <video className="responsive-video" autoPlay loop muted playsInline>
          <source src={mainVdo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
