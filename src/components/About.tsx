import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-subtitle">A propos de notre Fondation.</p>
        <h2 className="section-title">Decouvrez notre Fondation FIDEPE </h2>
        <p className="section-description">
          La Fondation FIDEPE existe depuis bien de nombreuse années; Elle
          oeuvre dans le dommaine de l'entrepreunariat, le developpement Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque vitae
          eveniet nesciunt nihil, odio nostrum maiores sapiente, quo
          necessitatibus laboriosam quibusdam, molestias excepturi amet nemo
          voluptas recusandae! Aperiam, quos?
        </p>
      </div>

      <div className="container grid">
        <div className="about-card">
          <Image
            src="/assets/images/icons8-carte-contact-50.png"
            width={50}
            height={50}
            alt="Image 1"
            className="about-img"
          />
          <h3 className="about-title">Existance</h3>
          <p className="about-description">
            La Fondation FIDEPE existe depuis plus de 10 ans{" "}
          </p>
        </div>

        <div className="about-card">
          <Image
            src="/assets/images/icons8-a-propos-de-nous-homme-64.png"
            width={50}
            height={50}
            alt="Image 2"
            className="about-img"
          />
          <h3 className="about-title">Participation</h3>
          <p className="about-description">
            Elle a participe a plusieurs conferences dans le monde
          </p>
        </div>

        <div className="about-card">
          <Image
            src="/assets/images/coup-de-main-64.png"
            width={50}
            height={50}
            alt="Image 2"
            className="about-img"
          />
          <h3 className="about-title">Personne touchée</h3>
          <p className="about-description">
            A travers le volontariat, elle a touche plusieurs personnes{" "}
          </p>
        </div>

        <div className="about-card">
          <Image
            src="/assets/images/icons8-services-100.png"
            width={50}
            height={50}
            alt="Image 2"
            className="about-img"
          />
          <h3 className="about-title">Impact</h3>
          <p className="about-description">
            Avec son impact direct sur la population, elle se hisse au sommet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
