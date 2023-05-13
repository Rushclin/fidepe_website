import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <article>
        <Hero />
        <About />
        <Contact />
      </article>
    </main>
  );
};

export default HomePage;
