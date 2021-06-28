import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";

const About = () => {
  return (
    <div className="section-container">
      <Header heading="About Me." details="Front-End Developer" />
      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      />
      <div className="about__vectorFrame">
        <img src={aboutVector} className="about__vector" alt="vector frame" />
      </div>
    </div>
  );
};

export default About;
