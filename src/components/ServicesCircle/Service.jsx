import React from "react";
import WM from "../../assets/all-images/Washing machine/7.png";
import Ref from "../../assets/all-images/Washing machine/ref.png";
import Geyser from "../../assets/all-images/Washing machine/geyser.png";
import AC from "../../assets/all-images/Split AC/13.png";
import RO from "../../assets/all-images/RO.jpg";
import RH from "../../assets/Room-heater2.png";

const Services = () => {
  const services = [
    {
      name: "Room Heater",
      image:RH,
      link: "/room-heater",
    },
    {
      name: "AC",
      image: AC,
      link: "/ac",
    },
    {
      name: "Washing Machine",
      image: WM,
      link: "/washing_machine",
    },
    {
      name: "RO Water Purifier",
      image: "https://www.pngmart.com/files/6/Kent-RO-Water-Purifier-PNG-HD.png",
      link: "/ro-water-purifier-rental",
    },
    {
      name: "Refrigerator",
      image:Ref,
      link: "/refrigerator-rental",
    },
    {
      name: "Geyser",
      image:Geyser,
      link: "/Geyser",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // Reduced gap for a tighter layout
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "180px", // Reduced size of circle
              height: "180px", // Reduced size of circle
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => (window.location.href = service.link)}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                style={{
                  objectFit: "contain", // Ensures the image maintains its aspect ratio without cropping
                  width: "100%", // Ensure the image takes up the full width of the container
                  height: "100%", // Ensure the image takes up the full height of the container
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                textAlign: "center",
                fontSize: "0.9rem", // Reduced font size for better proportion
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "5px 10px",
                borderRadius: "10px",
                width: "90%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {service.name.split(" ").map((word, idx) => (
                <span key={idx} style={{ display: "block" }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (min-width: 768px) {
            div[style*="width: 180px"] {
              width: 220px; // Slightly increase size on medium screens
              height: 220px;
            }
          }

          @media (min-width: 992px) {
            div[style*="display: flex; flex-wrap: wrap;"] {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;
