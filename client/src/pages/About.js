import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About ReWear</h2>
      <p>
        ReWear is committed to sustainable fashion. We create stylish, eco-friendly clothes that help reduce waste and protect the planet.
      </p>
      <section className="about-images">
        <img src="/images/about1.jpg" alt="Sustainable fashion" />
        <img src="/images/about2.jpg" alt="Eco-friendly materials" />
      </section>
      <p>
        Our mission is to empower conscious consumers with quality apparel made from recycled and organic materials.
      </p>
    </div>
  );
}

export default About;
