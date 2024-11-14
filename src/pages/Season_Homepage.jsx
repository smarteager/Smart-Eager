import React from "react";
import { Link } from "react-router-dom";

const RentServicesHomepage = ({ onSummerClick, onWinterClick }) => {
  return (
    <div style={styles.container}>
      {/* Heading for the Page */}
      <h1 style={styles.title}>Select Seasonal Services</h1>

      <div style={styles.cardContainer}>
        {/* Winter Rentals Card */}
        <Link to="/winter-products" style={styles.link}>
          <div
            style={{ ...styles.card, ...styles.winterCard }}
            onClick={onWinterClick}
          >
            <div style={styles.icon}>❄️</div>
            <h2 style={styles.cardTitle}>Winter Rentals</h2>
            <p style={styles.cardText}>
              Discover heaters, geysers, and other winter essentials for a warm
              and cozy season.
            </p>
            <div style={styles.action}>
              <span>View Equipment</span> →
            </div>
          </div>
        </Link>

        {/* Summer Rentals Card */}
        <Link to="/summer-rentals" style={styles.link}>
          <div
            style={{ ...styles.card, ...styles.summerCard }}
            onClick={onSummerClick}
          >
            <div style={styles.icon}>☀️</div>
            <h2 style={styles.cardTitle}>Summer Rentals</h2>
            <p style={styles.cardText}>
              Choose from a range of cooling solutions, ACs, and summer-friendly
              appliances to keep you comfortable.
            </p>
            <div style={styles.action}>
              <span>View Equipment</span> →
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Styles as a JavaScript object
const styles = {
  container: {
    minHeight: "30vh",
    backgroundColor: "#f7fafc",
    padding: "2rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1a202c",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  card: {
    width: "260px",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  summerCard: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
  },
  winterCard: {
    backgroundColor: "#10b981",
    color: "#ffffff",
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardText: {
    fontSize: "0.9rem",
    color: "#e2e8f0",
    marginBottom: "0.5rem",
  },
  action: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
  // Media query for responsiveness
  "@media (max-width: 768px)": {
    container: {
      padding: "1rem",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    card: {
      width: "100%",
      padding: "0.8rem",
    },
    cardContainer: {
      flexDirection: "column",
      gap: "1rem",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
};

export default RentServicesHomepage;