import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { Link } from "react-router-dom";

const ServicesList = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit to 6 items initially (2 rows with 3 columns) if `showAll` is false
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <>
      <Row>
        {displayedServices.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </Row>

      <div className="text-center mt-3">
        <Button color="warning" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>

      {/* Updated CSS Styles */}
      <style jsx>{`
        .service__item {
          padding: 1rem; /* Reduced padding */
          border: 1px solid #ddd;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
          margin-bottom: 1.5rem; /* Reduced bottom margin for closer cards */
        }

        .service__item:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .service__item i {
          font-size: 2rem;
          color: orange;
        }

        @media (min-width: 992px) {
          .service__item {
            margin: 0 auto; /* Center on larger screens */
          }
        }

        @media (max-width: 768px) {
          /* Adjustments for smaller screens */
          .service__item {
            padding: 0.8rem; /* Reduce padding for smaller screens */
            margin-bottom: 1rem; /* Reduce gap between cards */
          }

          .text-center {
            margin-top: 1rem; /* Reduce top margin for the button */
          }
        }
      `}</style>
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <Link
        to="/BookingForm"
        style={{
          textDecoration: "none",
        }}
      >
        <span className="mb-3 d-inline-block">
          <i className={item.icon} />
        </span>

        <h6>{item.title}</h6>
        <p className="section__description">{item.desc}</p>
      </Link>
    </div>
  </Col>
);

export default ServicesList;
