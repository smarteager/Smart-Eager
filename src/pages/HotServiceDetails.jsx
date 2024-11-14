import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import services from "../pages/HotServices";

const styles = {
  container: {
    padding: "2rem",
    
    margin: "80px auto 0",
    maxWidth: "600px", // Reduced width
    margin: "80px auto 0", // Keeps it centered
  },
  card: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
    background: "#f8f9fa",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  content: {
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1a1a1a",
    marginBottom: "1rem",
  },
  description: {
    color: "#666",
    lineHeight: 1.6,
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#1a1a1a",
    marginBottom: "1rem",
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "1rem",
  },
  optionCard: (isSelected) => ({
    background: isSelected ? "#007bff" : "#f8f9fa",
    color: isSelected ? "white" : "#1a1a1a",
    borderRadius: "12px",
    padding: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: isSelected ? "0 4px 12px rgba(0, 123, 255, 0.3)" : "none",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
  }),
  optionName: {
    fontWeight: 600,
  },
  optionPrice: {
    fontSize: "0.9rem",
    opacity: 0.9,
  },
  kycLink: {
    display: "block",
    color: "#007bff",
    textDecoration: "none",
    margin: "2rem 0",
    fontWeight: 500,
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0056b3",
    },
  },
  rentButton: {
    width: "100%",
    padding: "1rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "#0056b3",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
    },
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((item) => item.id === parseInt(id));

  const initialVariant = service ? Object.keys(service.variants)[0] : null;
  const initialDuration = service && initialVariant
    ? Object.keys(service.variants[initialVariant].durations)[0]
    : null;

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [selectedDuration, setSelectedDuration] = useState(initialDuration);

  if (!service) return <div style={{ textAlign: "center", padding: "2rem", color: "#dc3545", fontSize: "1.2rem" }}>Service not found</div>;

  const variant = service.variants[selectedVariant];
  const durationPrice = variant.durations[selectedDuration];

  const handleRentNow = () => {
    navigate("/rental-form", {
      state: {
        service,
        selectedVariant,
        selectedDuration,
        variantPrice: variant.price,
        durationPrice,
      },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img src={service.image} alt={service.name} style={styles.image} />
        </div>
        
        <div style={styles.content}>
          <h2 style={styles.title}>{service.name}</h2>
          <p style={styles.description}>{service.description}</p>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Variants</h3>
            <div style={styles.optionsGrid}>
              {Object.keys(service.variants).map((variantKey) => (
                <div
                  key={variantKey}
                  onClick={() => {
                    setSelectedVariant(variantKey);
                    setSelectedDuration(Object.keys(service.variants[variantKey].durations)[0]);
                  }}
                  style={styles.optionCard(selectedVariant === variantKey)}
                >
                  <span style={styles.optionName}>{variantKey}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Durations</h3>
            <div style={styles.optionsGrid}>
              {variant &&
                Object.keys(variant.durations).map((durationKey) => (
                  <div
                    key={durationKey}
                    onClick={() => setSelectedDuration(durationKey)}
                    style={styles.optionCard(selectedDuration === durationKey)}
                  >
                    <span style={styles.optionName}>{durationKey}</span>
                    <span style={styles.optionPrice}>{variant.durations[durationKey]}</span>
                  </div>
                ))}
            </div>
          </div>

          <Link to="/kyc" style={styles.kycLink}>
            Review mandatory KYC documents before renting →
          </Link>

          <button onClick={handleRentNow} style={styles.rentButton}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;