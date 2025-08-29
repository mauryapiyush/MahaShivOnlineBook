import React from "react";
import "./About.css";
import { openWhatsApp } from "../../utils";
import CricketImage from "../../assets/bat.png";
import CardsImage from "../../assets/AboutCard.png";
import aboutBg from "../../assets/bg1.jpg"; // 👈 your background image

function About() {
  return (
    <section
      className="about"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-left">
        <img src={CricketImage} alt="Cricket" />
      </div>

      <div className="about-right">
        <h4>We are Maha Shiv</h4>
        <h2>The Biggest Platform For Providing Online Sports Betting IDs</h2>
        <p>
          Welcome to Maha Shiv, India’s No.1 Exchange and the most trusted
          provider of online sports betting IDs. We guarantee fast withdrawals,
          secure gameplay, and 24/7 support with industry-best prices.
        </p>

        <div className="about-buttons">
          <button
            className="whatsapp-btn"
            onClick={() => openWhatsApp("919389772618")}
          >
            WhatsApp Now
          </button>
          <button
            className="demo-btn"
            onClick={() => openWhatsApp("919389772618")}
          >
            Get Demo ID
          </button>
        </div>
      </div>

      <div className="about-extra">
        <img src={CardsImage} alt="Casino Cards" />
      </div>
    </section>
  );
}

export default About;
