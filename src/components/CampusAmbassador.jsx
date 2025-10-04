import React, { useState } from 'react';
import './Register.css';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  college: '',
  place: '',
  year: '',
  department: '',
  transactionId: '',
};

const SHEETDB_URL = "https://sheetdb.io/api/v1/campus-ambassador-endpoint"; // Replace with actual endpoint

function CampusAmbassador() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.name) return "Please enter your name.";
    if (!formData.email || !emailPattern.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.phone || formData.phone.toString().length !== 10) return "Please enter a valid 10-digit phone number.";
    if (!formData.whatsapp || formData.whatsapp.toString().length !== 10) return "Please enter a valid 10-digit WhatsApp number.";
    if (!formData.college) return "Please enter your college name.";
    if (!formData.place) return "Please enter your college city.";
    if (!formData.year) return "Please select your year of study.";
    if (!formData.department) return "Please enter your department.";
    if (!formData.transactionId) return "Please enter your transaction ID.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    setLoading(true);
    try {
      const dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString(),
        type: "Campus Ambassador"
      };
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataWithTimestamp })
      });
      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="registration-container">
        <h2>Application Successful!</h2>
        <h1>Thank you for applying to be a Campus Ambassador.</h1>
        <p>We'll review your application and contact you soon.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="onspot-banner">
On-spot registration will be available on Saturday morning for Rs. 220.      </div>
      <div className="registration-container">
        <h2>Campus Ambassador Registration</h2>
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
          <div className="form-row">
            <div className="form-group">
              <label>Year of Study *</label>
              <select name="year" value={formData.year} onChange={handleChange} required>
                <option value="" disabled>Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="5th Year">5th Year</option>
              </select>
            </div>
            <div className="form-group">
              <label>Department *</label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} required />
            </div>
          </div>
          <div className="qr-section">
            <h4>Scan Here to Pay Registration Fee</h4>
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
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CampusAmbassador;