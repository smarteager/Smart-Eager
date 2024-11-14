import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const iconStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    zIndex: "1000",
    animation: "pulse 2s infinite",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
  };

  return (
    <a
      href="https://wa.me/919306186668" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={iconStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, iconStyle);
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

// CSS for animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`, styleSheet.cssRules.length);

export default WhatsAppIcon;
