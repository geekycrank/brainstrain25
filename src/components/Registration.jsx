import React, { useState } from 'react';
import './Registration.css';
// import { useNavigate } from 'react-router-dom';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  college: '',
  place: '',
  events: [],
  drama: '',
  transactionId: '',
};

const eventOptions = [
  "Debate", "Dosthana", "Drama", "Adzap", "Puzzle",
  "Quiz", "Jam", "Uno minuto", "Shipwreck", "Poem and Microtale"
];

const SHEETDB_URL = "https://sheetdb.io/api/v1/mcnq19yq4x0nf";

function Registration() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Add this

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedEvents = [...formData.events];
    if (checked) {
      updatedEvents.push(value);
    } else {
      updatedEvents = updatedEvents.filter(event => event !== value);
    }
    setFormData({ ...formData, events: updatedEvents });
  };

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.name) return "Please enter your name.";
    if (!formData.email || !emailPattern.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.phone || formData.phone.toString().length !== 10) return "Please enter a valid 10-digit phone number.";
    if (!formData.whatsapp || formData.whatsapp.toString().length !== 10) return "Please enter a valid 10-digit WhatsApp number.";
    if (!formData.college) return "Please enter your college name.";
    if (!formData.place) return "Please enter your college city.";
    if (!formData.events.length) return "Please select at least one event.";
    if (!formData.drama) return "Please select your participation in drama.";
    if (!formData.transactionId) return "Please enter your transaction ID.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      return;
    }
    setLoading(true);
    try {
      const dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataWithTimestamp })
      });
      setSubmitted(true); // Show success message
    } catch (err) {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="registration-container">
        <h2>Submission Successful!</h2>
        <h1>Your registration has been received.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="onspot-banner">
        On-spot registration will be available on Saturday
        morning for Rs. 220.
      </div>
      <div className="registration-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Id *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone No *</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Whatsapp No *</label>
              <input type="number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>College Name *</label>
              <input type="text" name="college" value={formData.college} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>College City *</label>
              <input type="text" name="place" value={formData.place} onChange={handleChange} required />
            </div>
          </div>
          <label className="events-title">
            Events Participating *
          </label>
          <div className="events-section">
            {eventOptions.map(event => (
              <label key={event}>
                <input
                  type="checkbox"
                  value={event}
                  checked={formData.events.includes(event)}
                  onChange={handleCheckboxChange}
                />
                {event}
              </label>
            ))}
          </div>
          <div className="note">
            Are you participating in Drama?*<br />
            <span>
              <strong>**NOTE :</strong> Select YES only if you are the Drama team lead, team members can answer NO.
            </span>
          </div>
          <select name="drama" value={formData.drama} onChange={handleChange} required>
            <option value="" disabled>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="qr-section">
            <h4>Scan Here to Pay</h4>
            <div className="qr-box">
              {/* Place QR image here if needed */}
            </div>
          </div>
          <div className="transaction-label">
            UPI Transaction Id* ( Eg: 1234XXXXXX5678, not abcd@okxyzbank )
          </div>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
          {/* Optionally, show loading indicator near the submit button */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;