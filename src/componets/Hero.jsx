import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-title">
          Find Your Dream <br /> Job with Ease
        </p>
        <p className="hero-subtitle">
          Search, Apply, and Track Job Applications <br />
          All in One place
        </p>
      </div>

      <img className="hero-image" src="./src/photos/HeroLogo.svg" alt="logo" />
    </div>
  );
};

export default Hero;
