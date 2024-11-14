import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  const services = [
    "AC Rental",
    "Room Oil Heater Rental",
    "Refrigerator Rental",
    "Geyser Rental",
    "RO Water Purifier Rental",
    "Washing Machine Rental",
    "LED/Television Rental",
    "Electrician & Plumber Services",
    "Inverter Rental",
    "Construction Equipment & Stabilizer Rental",
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section
      className={`about__section ${aboutClass === "aboutPage" ? "about__section--aboutPage" : "about__section--default"}`}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Our Electronics & Equipment Rental Service</h2>
              <p className="section__description">
                We offer a diverse range of essential rental services to make life easier and more convenient for our customers. From air conditioning and refrigeration to specialized construction equipment and water purifiers, our services ensure that you get reliable and high-quality appliances whenever you need them, at unbeatable prices.
              </p>

              <div className="about__section-services">
                {displayedServices.map((service, index) => (
                  <p className="section__description d-flex align-items-center gap-2" key={index}>
                    <i className="ri-checkbox-circle-line tick-icon"></i> {service}
                  </p>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  color="warning" 
                  onClick={() => setShowAll(!showAll)} 
                  className="mt-3"
                >
                  {showAll ? "Show Less" : "Show More"}
                </Button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/6196225/pexels-photo-6196225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Rental Services" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS */}
      <style jsx>{`
        .about__section {
          margin-top: 0; /* Adjusted to remove excessive margin */
        }

        .about__section--aboutPage {
          margin-top: 0;
        }

        @media (min-width: 992px) {
          .about__section {
            height: 80vh;
          }

          .about__section-content {
            max-height: 70vh;
            overflow-y: auto;
          }

          .about__section-services {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        .tick-icon {
          color: orange; /* Set the tick icon color to orange */
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
