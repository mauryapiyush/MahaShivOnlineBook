import React from "react";
import "./HowItWorks.css";
import { openWhatsApp } from "../../utils";

const steps = [
  { n: 1, text: "Message us on our WhatsApp number" },
  { n: 2, text: "Customer Safety guaranteed with all information" },
  { n: 3, text: "Start depositing & withdrawal instantly" },
  { n: 4, text: "Earn from your skills" },
];

function HowItWorks() {
  return (
    <section className="howitworks">
      <h2 className="hiw-title">How <span>it works</span></h2>

      <div className="hiw-steps">
        {steps.map((s) => (
          <div className="hiw-step" key={s.n}>
            <div className="hiw-circle">
              <span className="hiw-step-label">Step</span>
              <span className="hiw-step-number">{s.n}</span>
            </div>
            <p className="hiw-step-text">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="hiw-copy">
        <p className="hiw-strong">
          Maha Shiv is The Biggest Platform For Providing Online Sports Betting ID's.
        </p>
        <p>Get Your Betting Id Now. Contact Us On WhatsApp.</p>
        <p className="hiw-small">
          For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.
        </p>
      </div>

      <h3 className="wa-heading">Whats<span>app</span> us on</h3>

      <div className="wa-buttons">
        <button className="wa-btn" onClick={() => openWhatsApp("919389772618")}>
          +91 9389772618
        </button>
        <button className="wa-btn" onClick={() => openWhatsApp("919557342648")}>
          +91 9557342648
        </button>
        <button className="wa-btn" onClick={() => openWhatsApp("918533078421")}>
          +91 8533078421
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;

