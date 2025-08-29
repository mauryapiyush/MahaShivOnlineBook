import React from "react";
import "./Partners.css";
import { openWhatsApp } from "../../utils";
import partnersBg from "../../assets/bg3.jpg"; // 👈 background image

const partners = [
  {
    name: "Club",
    website: "theclub247247.com",
    url: "https://theclub247.com/",
    username: "Demo05",
    password: "Asdf1234",
  },
  {
    name: "FairPlay",
    website: "FairPlay.com",
    url: "https://fairplay44.com/",
    username: "Demo05",
    password: "Asdf1234",
  },
  {
    name: "Crex",
    website: "crex99.com",
    url: "https://crex99.io/d/login",
    username: "Demo05",
    password: "Asdf1234",
  },
  {
    name: "Winner",
    website: "winner99.com",
    url: "https://winner99.io/d/login",
    username: "Demo05",
    password: "Asdf1234",
  },
  {
    name: "Lotus",
    website: "maxlotus365.com",
    url: "https://maxlotus365.com/",
    username: "Demo05",
    password: "Asdf1234",
  },
  {
    name: "SilverBhai",
    website: "silverbhai.com",
    url: "https://silverbhai.com/",
    username: "Demo05",
    password: "Asdf1234",
  },
];

function Partners() {
  return (
    <section
      className="partners"
      style={{ backgroundImage: `url(${partnersBg})` }}
    >
      <div className="partners-overlay">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <h3>{partner.name}</h3>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                {partner.website}
              </a>
              <p>
                <strong>Username:</strong> {partner.username}
              </p>
              <p>
                <strong>Password:</strong> {partner.password}
              </p>
              <button
                className="demo-btn"
                onClick={() => openWhatsApp("919389772618")}
              >
                Get Demo ID
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
