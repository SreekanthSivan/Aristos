import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/images/hero-team.jpg" alt="Team" />
        <div className="hero-overlay">
          <p className="subtitle">ARISTOS GLOBAL</p>
          <h1>
            Global Expertise,<br />
            Localized Precision
          </h1>
          <p className="description">
            Unlock offshore potential with the best talent and strategic solutions.
          </p>
          <button className="btn btn-outline">Explore Solutions</button>
        </div>
      </div>
    </section>


  );
};

export default Hero;
