import React from "react";
import { Link } from "react-router-dom";
import services from "../../pages/HotServices"; // Adjust the path as necessary

const HotOffers = () => {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {services.slice(0, 6).map((service) => (
          <div key={service.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src={service.image}
                alt={service.name}
                style={styles.image}
              />
            </div>

            <div style={styles.content}>
              <h3 style={styles.serviceName}>{service.name}</h3>
              <p style={styles.price}>
                <span style={styles.priceAmount}>{service.price}</span>
              </p>

              <Link to={`/service/${service.id}`} style={styles.link}>
                <button style={styles.button}>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    justifyContent: "center",
    padding: "0.5rem",
  },

  card: {
    background: "white",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    border: "1px solid #eee",
    padding: "0.5rem",
    transform: "scale(0.95)",
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: "180px", // Set a fixed height for consistency
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // Ensures the image is not cropped
    transition: "transform 0.3s ease",
  },

  content: {
    padding: "1rem",
  },

  serviceName: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#333",
  },

  price: {
    color: "#333",
    marginBottom: "1rem",
    fontSize: "1rem",
  },

  priceAmount: {
    color: "#ff5733",
    fontWeight: "700",
    fontSize: "1.2rem",
  },

  link: {
    textDecoration: "none",
    display: "block",
    width: "100%",
  },

  button: {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default HotOffers;
