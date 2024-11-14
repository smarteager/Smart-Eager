import React from "react";

const GoogleMap = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14038.820372352899!2d77.045018295945!3d28.397973938396646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22f05651db7b%3A0x5a9d6df4e8da1b90!2sBadshahpur%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730353939691!5m2!1sen!2sin"
        width="90%"
        height="450px"
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google-map"
      ></iframe>

      {/* Structured data script */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Smart Eager Enterprise",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Badshahpur, Sector 66",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122018",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.3979739",
              "longitude": "77.0450183"
            },
            "url": "https://www.smarteager.com"
          }
        `}
      </script>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "60%",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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

export default GoogleMap;
