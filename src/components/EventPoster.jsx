import React from "react";
import "./EventPoster.css";

const EventPoster = ({ title, description, guidelines, rules, contact, prize }) => {
  return (
    <div className="poster-container">
      <div className="poster-box">
        <h1 className="poster-title">{title}</h1>

        <section>
          <h2 className="section-title">Events</h2>
          <p className="section-text">{description}</p>
        </section>

        <section>
          <h2 className="section-title">Guidelines</h2>
          <ol>
            {guidelines.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="section-title">Rules</h2>
          <ol>
            {rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </section>

        <div className="footer">
          <p>
            <b>Contact</b>
            <br />
            {contact.name} &nbsp; {contact.phone}
          </p>
          <p className="prize">
            <b>Prize Pool:</b> {prize}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPoster;
