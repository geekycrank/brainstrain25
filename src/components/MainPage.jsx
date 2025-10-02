import React, { useEffect, useState } from "react";
import "./MainPage.css";

// Assets
import bslogo from "../assets/bslogo.png";
import phone from "../assets/phone.png";
import janani from "../assets/janani.png";
import saravana from "../assets/saravana.png";
import manikandan from "../assets/manikandan.png";

import bats from "../assets/bats.png";
import witch from "../assets/witch.png";
import trees from "../assets/trees.png";
import hill from "../assets/hill vector.png";
import castle from "../assets/castle vector.png";
import moon from "../assets/moon - group.png";
import stars from "../assets/stars.png";
import background from "../assets/background.png";
import BStypography from "../assets/BS typography.png";
import BSOtypography from "../assets/BS typography outline.png";

export default function MainPage() {
  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-10-25T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / (1000 * 60)) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-page" style={{ backgroundImage: `url(${background})` }}>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <img src={stars} className="hero-stars" alt="" />
        <img src={moon} className="hero-moon" alt="" />
        <img src={castle} className="hero-castle" alt="" />
        <img src={hill} className="hero-hill" alt="" />
        <img src={trees} className="hero-trees" alt="" />
        <img src={bats} className="hero-bats" alt="" />
        <img src={witch} className="hero-witch" alt="" />

        <div className="overlay">
          <h3 className="society-title">
            The Literary and Debating Society<br />Presents
          </h3>
          <div className="hero-title">
            <img src={BStypography} alt="Brainstrain '25" className="bstypography" />
            <img src={BSOtypography} alt="Brainstrain '25" className="bsotypography" />
          </div>
          <p className="date">Starts on <span>October 25</span></p>
          <div className="countdown">
            <div className="time-box"><span className="num">{timeLeft.days}</span><span className="label">Days</span></div>
            <div className="time-box"><span className="num">{timeLeft.hrs}</span><span className="label">Hrs</span></div>
            <div className="time-box"><span className="num">{timeLeft.mins}</span><span className="label">Mins</span></div>
            <div className="time-box"><span className="num">{timeLeft.secs}</span><span className="label">Secs</span></div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section" id="about">
        <div className="about-box">
          <img src={bslogo} alt="Brainstrain Logo" className="about-icon" />
          <div>
            <h3>About Us</h3>
            <p>
              Brainstrain is a national-level quizzing fest, hosted by the Literary and Debating Society of Government College of Technology, Coimbatore.
              It brings together India's brightest young quizzers for an intellectual exhibition of wit, strategy, and knowledge.  
              Events spread across days, providing a platform to showcase diverse perspectives and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Web Team */}
      <section className="web-team-section" id="team">
        <h2>Web Team</h2>
        <div className="team-cards">
          <div className="member-card">
            <img src={janani} alt="Janani S" className="photo" />
            <div className="details">
              <h4>Janani S</h4>
              <p>Designer</p>
            </div>
          </div>
          <div className="member-card">
            <img src={saravana} alt="Saravanavel C" className="photo" />
            <div className="details">
              <h4>Saravanavel C</h4>
              <p>Designer</p>
            </div>
          </div>
          <div className="member-card">
            <img src={manikandan} alt="Manikandan M" className="photo" />
            <div className="details">
              <h4>Manikandan M</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-contact">
          <img src={phone} alt="telephone" className="phone-icon" />
          <div>
            <p>Bharani – 70100 69766</p>
            <p>Akash – 63856 08263</p>
          </div>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        </div>
        <p className="footer-credit">Powered By The Literary And Debating Society</p>
      </footer>
    </div>
  );
}
