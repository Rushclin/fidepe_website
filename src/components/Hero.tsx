import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="h1 hero_title">Fondation FIDEPE</h2>
        <p className="hero_text">
          Fondation Internationnal pour le Developpement, l'Entrepreunariat et
          la Protection de l'Environnement.
        </p>
        <div className="btn-group">
          <button className="btn btn-primary">Faire un don</button>

          <button className="btn btn-secondary">En savoir plus</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
