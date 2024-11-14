import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SummerItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`); // Navigate to service details page
  };

  return (
    <Card className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
      {/* Image container with fixed height */}
      <div
        style={{
          width: "100%",
          height: "200px", // Fixed height for image
          overflow: "hidden", // Ensures that any overflowing content is hidden
          display: "flex", // Flexbox for centering the image
          justifyContent: "center", // Center the image horizontally
          alignItems: "center", // Center the image vertically
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            objectFit: "contain", // Ensures the image maintains its aspect ratio without cropping
            width: "100%", // Ensure the image takes up the full width of the container
            height: "100%", // Ensure the image takes up the full height of the container
          }}
        />
      </div>

      {/* Card body for the content */}
      <CardBody
        style={{
          display: "flex",
          flexDirection: "column", // Stack the content vertically
          justifyContent: "space-between", // Space out the content if necessary
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

export default SummerItem;
