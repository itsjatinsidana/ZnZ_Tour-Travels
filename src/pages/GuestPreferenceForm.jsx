import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

// Hook to detect screen width
const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
};

const GuestPreferenceForm = () => {
  const isMobile = useMobile();
  const [formData, setFormData] = useState({
    arrival: "",
    stayDays: "",
    people: "",
    kids: "",
    phone: "",
    transport: "Sedan (4-seater)",
    stayType: "Hotel",
    budget: "3-Star",
    food: "Vegetarian",
    attractions: "",
    wantRecommendations: "Yes",
    gurdwara: "Yes",
    heritage: "No",
    specialNeeds: "",
    other: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
      "service_1dtpu0o",
        "template_5qzqvff",
        formData,
        "T5GZa8ePUdtU6cJCH"     // Replace with your public key
      )
      .then(
        (response) => {
          Swal.fire("Success", "Preferences sent successfully!", "success");
          setFormData({
            arrival: "",
            stayDays: "",
            people: "",
            kids: "",
            phone: "",
            transport: "Sedan (4-seater)",
            stayType: "Hotel",
            budget: "3-Star",
            food: "Vegetarian",
            attractions: "",
            wantRecommendations: "Yes",
            gurdwara: "Yes",
            heritage: "No",
            specialNeeds: "",
            other: "",
          });
        },
        (err) => {
          Swal.fire("Error", "Failed to send preferences.", "error");
        }
      );
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(69, 58, 58, 0.1)",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#2c3e50",
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "30px",
    marginBottom: "20px",
    color: "#34495e",
    borderBottom: "2px solid #eee",
    paddingBottom: "5px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "500",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "vertical",
  };

  const rowStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const columnStyle = {
    flex: "1",
    minWidth: isMobile ? "100%" : "calc(50% - 10px)",
  };

  const fullWidthStyle = {
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#aa8453",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "30px",
    display: "block",
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <>
      <Navbar />
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark={7}
        data-background="img/slider/partition_muesem.jpeg"
        style={{ height: "550px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 caption mt-90">
              <h1>Customized Plan</h1>
            </div>
          </div>
        </div>
      </div>

      <form style={containerStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>ZnZ Travel & Stays - Guest Preference Questionnaire</h2>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Thank you for choosing ZnZ Travel & Stays for your Amritsar visit.
          To ensure a smooth and customized experience, kindly fill out this short questionnaire.
        </p>

        {/* Section 1 */}
        <h3 style={sectionTitle}>1. Travel Details</h3>
        <div style={rowStyle}>
          <div style={columnStyle}>
            <label style={labelStyle}>Arrival Date & Time</label>
            <input
              type="datetime-local"
              name="arrival"
              style={inputStyle}
              value={formData.arrival}
              onChange={handleChange}
            />
          </div>
          <div style={columnStyle}>
            <label style={labelStyle}>Number of Days Staying</label>
            <input
              type="number"
              name="stayDays"
              style={inputStyle}
              value={formData.stayDays}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Section 2 */}
        <h3 style={sectionTitle}>2. Group Information</h3>
        <div style={rowStyle}>
          <div style={columnStyle}>
            <label style={labelStyle}>Total number of people</label>
            <input
              type="number"
              name="people"
              style={inputStyle}
              value={formData.people}
              onChange={handleChange}
            />
          </div>
          <div style={columnStyle}>
            <label style={labelStyle}>Number of kids (ages if possible)</label>
            <input
              type="text"
              name="kids"
              style={inputStyle}
              value={formData.kids}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            style={inputStyle}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Section 3 */}
        <h3 style={sectionTitle}>3. Transportation Preferences</h3>
        <div style={fullWidthStyle}>
          <select name="transport" style={inputStyle} value={formData.transport} onChange={handleChange}>
            <option>Sedan (4-seater)</option>
            <option>SUV (6-seater)</option>
            <option>Tempo Traveller (7+ seater)</option>
            <option>Luxury Van</option>
          </select>
        </div>

        {/* Section 4 */}
        <h3 style={sectionTitle}>4. Stay Preferences</h3>
        <div style={rowStyle}>
          <div style={columnStyle}>
            <label style={labelStyle}>Preferred stay</label>
            <select name="stayType" style={inputStyle} value={formData.stayType} onChange={handleChange}>
              <option>Hotel</option>
              <option>Homestay</option>
              <option>Villa</option>
            </select>
          </div>
          <div style={columnStyle}>
            <label style={labelStyle}>Expected Budget</label>
            <select name="budget" style={inputStyle} value={formData.budget} onChange={handleChange}>
              <option>3-Star</option>
              <option>4-Star</option>
              <option>5-Star</option>
              <option>Simple Homestay</option>
              <option>Luxury Homestay</option>
            </select>
          </div>
        </div>

        {/* Section 5 */}
        <h3 style={sectionTitle}>5. Food Preferences</h3>
        <div style={fullWidthStyle}>
          <select name="food" style={inputStyle} value={formData.food} onChange={handleChange}>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Mixed Preference</option>
          </select>
        </div>

        {/* Section 6 */}
        <h3 style={sectionTitle}>6. Attractions & Sightseeing</h3>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Must-visit places you'd like to see</label>
          <textarea name="attractions" style={textareaStyle} value={formData.attractions} onChange={handleChange} />
        </div>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Would you like recommendations from us?</label>
          <select
            name="wantRecommendations"
            style={inputStyle}
            value={formData.wantRecommendations}
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Section 7 */}
        <h3 style={sectionTitle}>7. Spiritual Experience</h3>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Comfortable with Gurdwara Darshan early morning?</label>
          <select name="gurdwara" style={inputStyle} value={formData.gurdwara} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Section 8 */}
        <h3 style={sectionTitle}>8. Heritage Walk Experience</h3>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Would you like to do a Heritage Walk?</label>
          <select name="heritage" style={inputStyle} value={formData.heritage} onChange={handleChange}>
            <option>No</option>
            <option>A local guide</option>
            <option>A special guide</option>
          </select>
        </div>

        {/* Section 9 */}
        <h3 style={sectionTitle}>9. Additional Requests</h3>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Special arrangements (wheelchair, celebrations, etc.)</label>
          <textarea name="specialNeeds" style={textareaStyle} value={formData.specialNeeds} onChange={handleChange} />
        </div>
        <div style={fullWidthStyle}>
          <label style={labelStyle}>Any other requirements or preferences?</label>
          <textarea name="other" style={textareaStyle} value={formData.other} onChange={handleChange} />
        </div>

        <button type="submit" style={buttonStyle}>Submit Preferences</button>
      </form>
    </>
  );
};

export default GuestPreferenceForm;
