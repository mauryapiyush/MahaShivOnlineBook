import React from "react";
import "./FriendlyBook.css";
import stadiumBg from "../../assets/friendly-book.jpg"; // 👈 import background image

const points = [
  "We Are Dealing With Most Trusted And Well-Known Exchanges.",
  "All Major Sports Games Available (Cricket, Tennis, Football, Table Tennis, Basketball, Volleyball And Many More).",
  "Live Casino 500+ Games Available (Baccarat, Teenpatti, Roulette, Lucky7, Poker, Dragon Tiger And Many More).",
  "Easy Deposit And Withdrawal.",
  "Refer Your Friends And Get Benefits.",
];

function FriendlyBook() {
  return (
    <section
      className="friendlybook"
      style={{ backgroundImage: `url(${stadiumBg})` }}
    >
      <div className="fb-overlay">
        <h2 className="fb-title">Friendly Book</h2>
        <ul className="fb-list">
          {points.map((p, i) => (
            <li key={i} className="fb-item">
              <span className="fb-icon">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FriendlyBook;
