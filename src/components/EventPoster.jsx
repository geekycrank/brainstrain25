import React from "react";
import "./EventPoster.css";

const EventPoster = ({ title, description, theme, guidelines, prelims, finals, contact, prize }) => {
  return (
    <div className="poster-container">
      <div className="poster-box">
        <h1 className="poster-title">{title}</h1>

        <section>
          <h2 className="section-title">Description</h2>
          <p className="section-text">{description}</p>
        </section>

        {theme && (
          <section>
            <h2 className="section-title">Theme</h2>
            <p className="section-text">{theme}</p>
          </section>
        )}

        <section>
          <h2 className="section-title">Guidelines</h2>
          <ol>
            {guidelines.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ol>
        </section>

        <section>
          {(prelims.length > 0 || finals.length > 0) ? (
            <>
              <h2 className="section-title">Rules</h2>
              
              {prelims && prelims.length > 0 && (
                <div>
                  <h3 className="subsection-title">Preliminaries</h3>
                  <ol>
                    {prelims.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ol>
                </div>
              )}

              {finals && finals.length > 0 && (
                <div>
                  <h3 className="subsection-title">Finals</h3>
                  <ol>
                    {finals.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          ) : null}
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
