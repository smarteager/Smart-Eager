import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const KYCDoc = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Know Your Customer</h1>

      <div style={cardStyle}>
        <h2>Working Professional</h2>
        <h3>Mandatory Documents</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>Pan Card</li>
          <li>Selfie</li>
          <li>Company name and Official Email ID</li>
        </ul>
        <p style={{ fontStyle: "italic", color: "gray", marginTop: "5px" }}>
          Note: While we appreciate you sharing your documents, please note that Smart Eager reserves the right to confirm or decline the order on a case-by-case basis.
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Self Employed</h2>
        <h3>Mandatory Documents</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>Pan Card</li>
          <li>Selfie</li>
          <li>GST number</li>
        </ul>
        <p style={{ fontStyle: "italic", color: "gray", marginTop: "5px" }}>
          Note: While we appreciate you sharing your documents, please note that Smart Eager reserves the right to confirm or decline the order on a case-by-case basis.
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Students</h2>
        <h3>Mandatory Documents</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>Govt ID card</li>
          <li>Profile pic</li>
          <li>Bank statement</li>
          <li>College name</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Additional Documents</h2>
        <p style={{ margin: "0" }}>
          We might also ask for the following documents in some cases:
        </p>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>Parent's Bank Statement</li>
          <li>Parent's Govt ID</li>
          <li>6 months Bank Statement might be asked to be uploaded in some cases</li>
        </ul>
        <p style={{ fontStyle: "italic", color: "gray", marginTop: "5px" }}>
          Note: While we appreciate you sharing your documents, please note that Smart Eager reserves the right to confirm or decline the order on a case-by-case basis.
        </p>
      </div>
    </div>
  );
};

export default KYCDoc;
