import React from "react";
import "./Hero.css";
import { openWhatsApp } from "../../utils";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="hero-content">
        <h1>MOST TRUSTED BOOK IN ASIA</h1>
        <p>A Winner Is A Dreamer Who Never Gives Up</p>

        {/* New ID WhatsApp Text */}
        <div
          className="new-id-text"
          onClick={() => openWhatsApp("919389772618")}
        >
          📲 For New ID <span className="highlight">WhatsApp Us</span>
        </div>

        <div className="hero-buttons">
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
    </section>
  );
}

export default Hero;
