import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const WinterItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`); // Navigate to service details page
  };

  return (
    <Card className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: "200px",  // Set a fixed height to control image size
          overflow: "hidden", // Ensures that any overflowing content is hidden
          display: "flex",  // Use flexbox to center the image
          justifyContent: "center", // Horizontally center the image
          alignItems: "center",  // Vertically center the image
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            objectFit: "contain",  // Ensures the image maintains its aspect ratio without cropping
            maxHeight: "100%",  // Prevents the image from exceeding its container height
            maxWidth: "100%",  // Prevents the image from exceeding its container width
          }}
        />
      </div>

      <CardBody
        style={{
          display: "flex", 
          flexDirection: "column", // Stacks the title, description, and button vertically
          justifyContent: "space-between", // Ensures space between elements if necessary
        }}
      >
        <CardTitle tag="h5" style={{ marginBottom: "10px" }}>
          {item.name}
        </CardTitle>
        <CardText style={{ marginBottom: "10px" }}>{item.description}</CardText>
        <Button onClick={handleViewDetails} color="primary">
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default WinterItem;
