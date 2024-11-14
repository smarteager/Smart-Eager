import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/all-images/Logo-Main23.png"; 
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Importing icons for WhatsApp and Call Now

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/home/allproducts", display: "Rental Services" },
    { path: "/maintainance-services", display: "Maintainance Services" },
    { path: "/home/allproducts", display: "All Products" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      width: "100%",
      height: "80px",
      backgroundColor: "#172277", // Keep navbar blue
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "fixed",
      top: 0,
      zIndex: 999,
      transition: "background-color 0.3s ease",
    },
    container: {
      maxWidth: "1200px",
      height: "100%",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      height: "60px",
      width: "auto",
    },
    menuIcon: {
      display: isMobile ? "block" : "none",
      cursor: "pointer",
    },
    navMenu: {
      display: isMobile ? (isOpen ? "flex" : "none") : "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      gap: "2rem",
      flexDirection: isMobile ? "column" : "row",
      position: isMobile ? "fixed" : "relative",
      left: 0,
      top: isMobile ? "80px" : "auto",
      backgroundColor: isOpen ? "#ffffff" : "transparent", // White background when menu is open
      width: isMobile ? "100%" : "auto",
      height: isMobile ? "calc(100vh - 80px)" : "auto",
      alignItems: isMobile ? "center" : "flex-start",
      boxShadow: isMobile ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      padding: isMobile ? "2rem 0" : "0",
    },
    navLink: {
      color: isOpen ? "#333" : "#ffffff", // Text color changes when menu is open
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: 500,
      transition: "color 0.3s ease",
      padding: "10px", // Adding padding for better clickable area
      backgroundColor: isOpen ? "#ffffff" : "transparent", // Keep background white when open, transparent when closed
    },
    whatsappButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#25D366", // WhatsApp button color
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: "20px",
      textDecoration: "none",
      position: isMobile ? "absolute" : "relative",
      left: isMobile ? "50%" : "auto",
      transform: isMobile ? "translateX(-50%)" : "none",
      right: !isMobile ? "10px" : "auto",
    },
    callNowButton: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#172277",
      color: "#fff",
      padding: "10px 30px",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "16px",
      textDecoration: "none",
      marginLeft: "10px",
    },
    callNowText: {
      marginLeft: "10px",
      fontSize: "16px",
    },
    line: {
      display: "block",
      height: "4px",
      width: "30px",
      backgroundColor: "#ffffff", // White lines for the hamburger
      marginBottom: "6px",
      borderRadius: "4px",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>

        {/* Menu Icon (Hamburger) */}
        <div style={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          <div style={{ width: "30px", height: "20px", position: "relative" }}>
            <span
              style={{
                ...styles.line,
                top: isOpen ? "8px" : "0",
                transform: isOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                ...styles.line,
                top: "8px",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                ...styles.line,
                top: isOpen ? "8px" : "16px",
                transform: isOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </div>

        {/* Nav Menu */}
        <ul style={styles.navMenu}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              style={{ textAlign: "center", backgroundColor: "transparent" }}
            >
              <Link
                to={link.path}
                style={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {link.display}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call Now Button with Phone Number (Visible only on desktop) */}
        <a href="tel:+919306186668" style={styles.callNowButton}>
          <FaPhoneAlt style={{ fontSize: "20px" }} />
          <span style={styles.callNowText}>+919306186668</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919306186668"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          <FaWhatsapp style={{ fontSize: "24px" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
