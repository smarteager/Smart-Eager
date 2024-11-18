import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const commonStyle = {
    position: "fixed",
    bottom: "20px", // Adjust to position correctly relative to each other
    right: "20px",
    width: "60px",
    height: "60px",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    zIndex: "1000",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const whatsappStyle = {
    ...commonStyle,
    backgroundColor: "#25D366",
    bottom: "20px", // Positioned at the bottom
    display: isMobile ? "flex" : "none",
  };

  const callStyle = {
    ...commonStyle,
    backgroundColor: "#1029e7",
    bottom: "90px", // Positioned above WhatsApp button
    display: isMobile ? "flex" : "none",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
  };

  return (
    <>
      {/* Call Button */}
      <a
        href="tel:+917419011361" // Replace with your phone number
        style={callStyle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, callStyle);
        }}
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919306186668" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappStyle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, whatsappStyle);
        }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

// CSS for animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`,
  styleSheet.cssRules.length
);

export default FloatingButtons;
