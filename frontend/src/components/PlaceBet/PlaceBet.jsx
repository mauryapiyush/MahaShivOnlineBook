import React from "react";
import "./PlaceBet.css";

// import icons/images from assets
import cricketIcon from "../../assets/Cricket.png";
import footballIcon from "../../assets/Football.png";
import tennisIcon from "../../assets/Tennis.png";
import casinoIcon from "../../assets/LiveCasino.png";
import fantasyIcon from "../../assets/Fantasy.png";
import moreIcon from "../../assets/MoreSports.png";
import wheelIcon from "../../assets/giphy.webp";
import placebetBg from "../../assets/howitworksimage.jpg"; // 👈 your background image

function PlaceBet() {
  const sports = [
    { id: 1, name: "Cricket", icon: cricketIcon },
    { id: 2, name: "Football", icon: footballIcon },
    { id: 3, name: "Tennis", icon: tennisIcon },
    { id: 4, name: "Live Casino", icon: casinoIcon },
    { id: 5, name: "Fantasy", icon: fantasyIcon },
    { id: 6, name: "More Sports", icon: moreIcon },
  ];

  return (
    <section
      className="placebet"
      style={{ backgroundImage: `url(${placebetBg})` }}
    >
      <div className="placebet-overlay">
        <div className="placebet-header">
          <img src={wheelIcon} alt="Wheel" className="placebet-icon" />
          <h2>How To Place Bet In Our Ids</h2>
          <p>
            Minimum Id : 500 Rs. Get your Id now for more details contact us now.
            <br />
            We are always here to provide step by step guidance and support for
            beginners 24x7.
          </p>
        </div>

        <div className="placebet-cards">
          {sports.map((sport) => (
            <div key={sport.id} className="placebet-card">
              <img src={sport.icon} alt={sport.name} />
              <span>{sport.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlaceBet;
