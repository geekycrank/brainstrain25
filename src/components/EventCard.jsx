import React, { useState } from "react";
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

import Rectangle from "../assets/Rectangle.png";
import phoneCard from "../assets/Phone Vector.png";
import EventPoster from "./EventPoster";

const EventCard = ({ event }) => {
  const [showPoster, setShowPoster] = useState(false);

  // Function to get the correct image based on event title
  const getEventImage = (title) => {
    switch (title) {
      case "ADZAP":
        return adzapImage;
      case "DEBATE":
        return DebateImage;
      case "UNO MINUTO":
        return UnoMinutoImage;
      case "PUZZLE":
        return PuzzleImage;
      case "DRAMA":
        return DramaImage;
      case "QUIZ":
        return QuizImage;
      case "JAM":
        return JamImage;
      case "SHIPWRECK":
        return ShipwreckImage;
      case "THE ARCANE CHALLENGE":
        return DosthanaImage;
      case "POEM":
        return PoemImage;
      case "MICROTALE":
        return MicrotaleImage;
      default:
        return adzapImage;
    }
  };

  // Function to get event data for the poster
  const getEventData = () => {
    return {
      title: event.title,
      description: event.description,
      theme: event.theme,  
      guidelines: [...(event.guidelines || [])],
      prelims: [...(event.prelims || [])],
      finals: [...(event.finals || [])],
      contact: { name: event.coordinator, phone: event.contact },
      prize: event.prize,
    };
  };

  return (
    <>
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
                <button
                  className="discover-btn"
                  onClick={() => setShowPoster(true)}
                >
                  Discover More
                </button>
                <span className="info-text">Prize Pool: {event.prize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPoster && (
        <div className="modal-overlay" onClick={() => setShowPoster(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setShowPoster(false)}
            >
              ×
            </button>
            <EventPoster {...getEventData()} />
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
