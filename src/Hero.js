import React from "react";

const Hero = () => {
  return (
    <div className="main">
      <div className="hero">
        <div className="hero__title">
          <div className="hero__title__heading">
            <h1>Travel</h1>
          </div>
          <div className="hero__title__text">
            <p>
              Here are my favorite travel and adventure quotes, paired with
              images from my journeys around the world.
            </p>
          </div>
          <button className="hero__title__button">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
