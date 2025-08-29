import React from "react";
import "./Footer.css";
import { openWhatsApp } from "../../utils";

// Import your logos from Assets
import bhimLogo from "../../assets/bhim.png";
import upiLogo from "../../assets/upi.png";
import impsLogo from "../../assets/imps.png";
import paytmLogo from "../../assets/paytm.png";
import airtelLogo from "../../assets/airtel.png";
import phonepeLogo from "../../assets/phonepe.png";
import bankLogo from "../../assets/netbanking.png";

// Social icons (colored PNGs from assets)
import whatsappIcon from "../../assets/whatsapp-footer.svg";
import telegramIcon from "../../assets/telegram-footer.svg";
import instagramIcon from "../../assets/insta-footer.svg";

function PaymentCard({ label, icon }) {
  return (
    <div className="payment-card">
      {icon ? <img src={icon} alt={label} /> : <span>{label}</span>}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-wrap">
      {/* tiny top strip */}
      <div className="footer-strip">
        <div className="footer-links">
          <a
            href="https://example.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </a>
          <span className="sep">|</span>
          <a
            href="https://example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>

        {/* social icons right side */}
        <div className="social-icons">
          <a
            href="https://wa.me/919389772618"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a
            href="https://t.me/mahashivonlinebook07"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a
            href="https://www.instagram.com/mahashivbook_online07/?igsh=dWF3cjc2djR0OW56"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="divider" />

      {/* trust + payments row */}
      <div className="trust-payments">
        <div className="trust-left">
          <div className="shield">🛡️</div>
          <div className="trust-text">
            <div className="safe">100% SAFE</div>
            <div className="sub">Protected connection and encrypted data</div>
          </div>
        </div>

        <div className="payments-row">
          <PaymentCard label="BHIM" icon={bhimLogo} />
          <PaymentCard label="UPI" icon={upiLogo} />
          <PaymentCard label="IMPS" icon={impsLogo} />
          <PaymentCard label="Paytm" icon={paytmLogo} />
          <PaymentCard label="Airtel" icon={airtelLogo} />
          <PaymentCard label="PhonePe" icon={phonepeLogo} />
          <PaymentCard label="Bank" icon={bankLogo} />
        </div>
      </div>

      <div className="divider" />

      {/* support row */}
      <div className="support-row">
        <div className="support-title">24 × 7 Support</div>
        <div className="support-phones">
          <button
            className="support-btn"
            onClick={() => openWhatsApp("919557342648")}
          >
            +91 9557342648
          </button>
          <span className="support-gap">/</span>
          <button
            className="support-btn"
            onClick={() => openWhatsApp("918533078421")}
          >
            +91 8533078421
          </button>
        </div>
      </div>

      <div className="divider" />

      {/* copyright */}
      <div className="copy-row">
        © Copyright 2024. All rights reserved by{" "}
        <span>Maha Shiv Online Book</span>.
      </div>
    </footer>
  );
}
