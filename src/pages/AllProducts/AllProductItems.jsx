import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SeasonCard from "../Season_Homepage";
const AllItems = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`); // Navigate to service details page
  };

  const handleRentOrBuy = () => {
    if (item.isForRent) {
      navigate(`/rental-form`, { state: { item } }); // Navigate to rental form
    } else {
      alert("Proceed to buy form!"); // Add logic for purchase if needed
    }
  };

  return (
    <>
      
      <Card className="mb-3">
        <img
          src={item.image || "/path/to/fallback-image.jpg"} // Fallback image path
          alt={item.name}
          style={{
            width: "100%",
            height: "180px", // Adjust for smaller display if needed
            objectFit: "contain", // Display full image without cropping
            objectPosition: "center", // Center the image
          }}
        />
        <CardBody>
          <CardTitle tag="h5">{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
          {item.price && (
            <CardText>
              <strong style={{ color: "red" }}>Price:</strong> {item.price}
            </CardText>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={handleViewDetails} color="primary">
              View Details
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default AllItems;
