import React, { useState } from "react";
import "./Header.css";
import { openWhatsApp } from "../../utils";
import headlogo from "../../assets/Headerlogo.png"; // ✅ use assets instead of public root

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={headlogo} alt="MahaShiv Online Book" />
          <h1>MahaShiv Online Book</h1>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Buttons */}
        <div className={`header-buttons ${menuOpen ? "active" : ""}`}>
          <button
            className="deposit-btn"
            onClick={() => openWhatsApp("919389772618")}
          >
            Deposit
          </button>
          <button
            className="withdraw-btn"
            onClick={() => openWhatsApp("919389772618")}
          >
            Withdraw
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
