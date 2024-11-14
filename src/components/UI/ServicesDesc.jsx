import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { Link } from "react-router-dom";
import CommonSection from "./CommonSection";

const ServicesList = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit to 6 items initially (2 rows with 3 columns) if `showAll` is false
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <>
      <Row>
      <CommonSection title="Services" />
        {displayedServices.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </Row>

      <div className="text-center mt-3">
        <Button color="warning" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .service__item {
          padding: 1.5rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
          margin-bottom: 100px;
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
            margin: 0 auto;
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
        textDecoration: "none"
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
