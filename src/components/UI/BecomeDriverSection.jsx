import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img
              src="https://www.appliance-repair-near-me.net/img/t39737ee6cc807e58dd2fa5a13a921ec4.jpg?29"
              alt="Service Provider"
              className="w-100"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2
              className="section__title become__driver-title"
              style={{
                color: "#fff", 
                fontWeight: "700", 
              }}
            >
              Expert Repairs & Reliable Rental Services for Your Home Essentials
            </h2>
            <p 
            className="section__description"
            style={{
              color: "#fff", 
              fontSize:"1.1rem",
            }}>
              Get expert repairs and reliable services in AC rentals, washing machines, RO water purifiers, and more!
            </p>

            <button className="btn become__driver-btn mt-4">
              <Link
                to="/BookingForm"
                style={{
                  textDecoration: "none",
                }}
              >
                Repair Now
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
