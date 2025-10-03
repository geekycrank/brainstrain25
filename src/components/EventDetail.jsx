import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './EventDetail.css';

const EventDetail = ({ events }) => {
  const { eventName } = useParams();
  
  // Find the event by name (case insensitive)
  const event = events.find(e => e.eventName.toLowerCase() === eventName.toLowerCase());
  
  if (!event) {
    return (
      <div className="event-detail-container">
        <Navbar />
        <div className="event-not-found">
          <h2>Event Not Found</h2>
          <p>The event you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-container">
      <Navbar />
      <div className="event-detail">
        <Link to="/" className="back-link">← Back to Events</Link>
        <h1 className="event-title">{event.eventName}</h1>
        
        <div className="event-section">
          <h2>Description</h2>
          <p>{event.description}</p>
        </div>
        
        <div className="event-section">
          <h2>Prize</h2>
          <p>₹{event.prize}</p>
        </div>
        
        <div className="event-section">
          <h2>Contact</h2>
          <p>{event.contact}</p>
        </div>
        
        {event.guidelines && event.guidelines.length > 0 && (
          <div className="event-section">
            <h2>Guidelines</h2>
            <ul>
              {event.guidelines.map((guideline, index) => (
                <li key={index}>{guideline}</li>
              ))}
            </ul>
          </div>
        )}
        
        {event.prelims && event.prelims.length > 0 && (
          <div className="event-section">
            <h2>Prelims</h2>
            <ul>
              {event.prelims.map((prelim, index) => (
                <li key={index}>{prelim}</li>
              ))}
            </ul>
          </div>
        )}
        
        {event.finals && event.finals.length > 0 && (
          <div className="event-section">
            <h2>Finals</h2>
            <ul>
              {event.finals.map((final, index) => (
                <li key={index}>{final}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;