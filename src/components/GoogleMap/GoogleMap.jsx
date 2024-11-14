import React from "react";

const GoogleMap = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14038.820372352899!2d77.045018295945!3d28.397973938396646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22f05651db7b%3A0x5a9d6df4e8da1b90!2sBadshahpur%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730353939691!5m2!1sen!2sin"
        width="90%"
        height="450px" // Adjust this value as needed
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google-map"
      ></iframe>
    </div>
  );
};

// Styles as a JavaScript object
const styles = {
  container: {
    width: "100%",
    height: "60%",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the top to reduce gaps
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    textAlign: "center",
  },
  iframe: {
    border: 0,
  },
};

// Media query for mobile responsiveness
const mediaQueryStyles = {
  '@media only screen and (max-width: 768px)': {
    container: {
      height: "80vh", // Adjust overall container height for mobile
      justifyContent: "flex-start", // Keep the content aligned to the top
      padding: "10px 0", // Add minimal padding if necessary
    },
    title: {
      marginBottom: "5px", // Reduce title margin for mobile
    },
    iframe: {
      height: "70vh", // Adjust iframe height for mobile
    },
  },
};

// Apply media query styles
Object.assign(styles, mediaQueryStyles);

export default GoogleMap;
