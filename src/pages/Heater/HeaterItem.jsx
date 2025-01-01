import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HeaterItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`);
  };

  return (
    <Card
      className="mb-3"
      style={{
        maxWidth: "100%", // Ensure the card takes full width in small screens
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for better visibility
        borderRadius: "12px", // Rounded corners for a modern look
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "200px",
          objectFit: "contain",
          borderRadius: "12px 12px 0 0", // Rounded top corners to match the card
        }}
      />

      <CardBody>
        <CardTitle
          tag="h5"
          style={{
            fontSize: "1rem", // Responsive text size
            marginBottom: "0.8rem",
            textAlign: "center",
          }}
        >
          {item.name}
        </CardTitle>
        <CardText
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.4",
            marginBottom: "1rem",
            color: "#6c757d",
          }}
        >
          {item.description}
        </CardText>
        <CardText
          style={{
            fontWeight: "bold",
            color: "#007bff",
            marginBottom: "1rem",
          }}
        >
          Price: {item.price}
        </CardText>
        <Button
          onClick={handleViewDetails}
          color="primary"
          style={{
            width: "100%",
            padding: "0.8rem",
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: "8px",
          }}
        >
          Rent Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default HeaterItem;
