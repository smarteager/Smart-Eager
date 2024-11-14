import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ACItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`); // Navigate to service details page
  };

  return (
    <Card className="mb-3">
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "200px", // Ensure height adjusts based on the width to maintain aspect ratio
          objectFit: "contain", // Adjust this to "contain" to show the entire image without cropping
          borderRadius: "8px",
        }}
      />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
        <Button onClick={handleViewDetails} color="primary">
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default ACItem;
