import React from "react";
import "./EventCard.css";
import adzapImage from "../assets/Adzap.png";
import DebateImage from "../assets/Debate.png";
import UnoMinutoImage from "../assets/Uno Minuto.png";
import PuzzleImage from "../assets/Puzzle.png";
import DramaImage from "../assets/Dramaa.png";
import QuizImage from "../assets/Quiz.png";
import JamImage from "../assets/Jam.png";
import ShipwreckImage from "../assets/Shipwreck.png";
import DosthanaImage from "../assets/Dosthana.png";
import PoemImage from "../assets/Poem.png";
import MicrotaleImage from "../assets/Microtale.png";

import Rectangle from "../assets/Rectangle.png"

import phoneCard from "../assets/Phone Vector.png";

const EventCard = ({ event }) => {
  // Function to get the correct image based on event title
  const getEventImage = (title) => {
    switch (title) {
      case "Adzap":
        return adzapImage;
      case "Debate":
        return DebateImage;
      case "Uno Minuto":
        return UnoMinutoImage;
      case "Puzzle":
        return PuzzleImage;
      case "Dramaa":
        return DramaImage;
      case "Quiz":
        return QuizImage;
      case "Jam":
        return JamImage;
      case "Shipwreck":
        return ShipwreckImage;
      case "Dosthana":
        return DosthanaImage;
      case "Poem":
        return PoemImage;
      case "Microtale":
        return MicrotaleImage;
      default:
        return adzapImage;
    }
  };

  return (
    <div className="event-card">
      <div className="card-gradient-border">
        <div className="card-content">
          <div className="card-image-container">
            <img
              src={getEventImage(event.title)}
              alt={event.title}
              className="card-image"
            />
          </div>
          <div className="card-details">
            <h3 className="card-title">{event.title}</h3>
            <p className="card-description">{event.description}</p>
            <div className="card-info">
              <div className="contact-info">
                <img
                  src={phoneCard}
                  alt="phoneCard"
                  className="phoneCard-image"
                />
                <span className="info-text">{event.contact}</span>
              </div>
              <button className="discover-btn">Discover More</button>
              <span className="info-text">Prize Pool: {event.prize}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
