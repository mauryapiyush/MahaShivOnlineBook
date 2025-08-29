import React from "react";
import "./Support.css";
import supportImg from "../../assets/Support.webp"; // 👈 put the customer support lady image in assets

function Support() {
  return (
    <section className="support-section">
      <div className="support-container">
        {/* Left Content */}
        <div className="support-text">
          <h2>Customer Support</h2>
          <ul>
            <li>✅ We Are Always Here To Help You 24x7 With Our Online Service.</li>
            <li>✅ No Limits On Daily Deposits And Withdrawals.</li>
            <li>✅ 100% Satisfactory Service.</li>
            <li>
              ✅ Get in Touch With Maha Shiv Online Book For Any Queries, Complaints Or Feedback.
              Contact Our Team 24x7.
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="support-image">
          <img src={supportImg} alt="Customer Support" />
          <div className="support-btns">
            <a href="tel:+919557342648" className="support-btn">+91 9557342648</a>
            <a href="tel:+918533078421" className="support-btn">+91 8533078421</a>
          </div>
          <p className="support-available">24×7 Customer Support Available</p>
        </div>
      </div>
    </section>
  );
}

export default Support;

