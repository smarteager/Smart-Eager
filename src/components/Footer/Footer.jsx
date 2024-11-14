import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/all-images/Logo-Main23.png"; 
import { Link } from "react-router-dom";

const quickLinks = [
  { path: "/about", display: "About Us" },
  { path: "/service-Booking", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const policies = [
  { path: "/terms", display: "Terms and Conditions" },
  { path: "/refunds", display: "Shipping Policy" },
  { path: "/Return-Pol", display: "Cancellation & Return Policy" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        background: "#000d6b",
        paddingTop: "50px",
        paddingBottom: "15px",
        marginTop: "5%",
      }}
    >
      <Container>
        <Row>
        <Col lg="4" md="4" sm="12">
  <div className="logo footer__logo">
    <Link
      to="/home"
      className="d-flex align-items-center"
      style={{ textDecoration: "none" }}
    >
      <img
        src={logo}
        alt="Smart Eager Enterprise Logo"
        style={{
          width: "180px", // Adjust the width as needed
          height: "auto",
          display: "block",
        }}
      />
    </Link>
  </div>
  <p
    style={{
      color: "rgba(255, 255, 255, 0.715)",
      marginTop: "15px",
      lineHeight: "30px",
    }}
  >
    We provide top-quality rental services, covering a wide range of
    essential appliances and equipment—from ACs and refrigerators to
    construction tools and water purifiers. Our commitment is to make
    reliable, high-quality rentals accessible and convenient.
  </p>
</Col>


          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 style={{ color: "#fff" }}>Company</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    style={{
                      padding: "0",
                      marginTop: "15px",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.715)",
                        textDecoration: "none",
                        fontWeight: "300",
                        transition: "0.3s",
                      }}
                    >
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 style={{ color: "#fff" }}>Policies</h5>
              <ListGroup>
                {policies.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    style={{
                      padding: "0",
                      marginTop: "15px",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.715)",
                        textDecoration: "none",
                        fontWeight: "300",
                        transition: "0.3s",
                      }}
                    >
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 style={{ color: "#fff" }}>Head Office</h5>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.715)",
                  fontWeight: "300",
                }}
              >
                Badshahpur Office
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.715)",
                  fontWeight: "300",
                }}
              >
                Teekali-Akhlimpur Road, City- Badshahpur, Haryana, Pin - 122101
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.715)",
                  fontWeight: "300",
                }}
              >
                Phone: +91-9306174774
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.715)",
                  fontWeight: "300",
                }}
              >
                Email: Info@smartEager.com
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <div>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem", margin: "0 10px" }}
              >
                <i className="ri-facebook-fill"></i>
              </a> */}
              <a
                href="https://youtube.com/@smart_eager?si=Un9G6htgOv0Wqa7D"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem", margin: "0 10px" }}
              >
                <i className="ri-youtube-fill"></i>
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem", margin: "0 10px" }}
              >
                <i className="ri-linkedin-fill"></i>
              </a> */}
              <a
                href="https://www.instagram.com/smart_eager_airconditioning/profilecard/?igsh=ZmppZjh5bjFpMDdw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.5rem", margin: "0 10px" }}
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </Col>
        </Row>

        <div
          className="footer__bottom"
          style={{
            borderTop: "1px solid #7c8a972f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <p style={{ color: "#fff", margin: "5px 0" }}>
            <span>
              <i className="ri-copyright-line"></i> Copyright {year}{" "}
            </span>
            <span style={{ color: "#fff", margin: "5px 0" }}>
              All rights reserved. Smart Eager Enterprise
            </span>
          </p>

          <span>
            <span style={{ color: "#fff" }}>Created by </span>
            <a
              href="https://zuridox.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f9a826", textDecoration: "none" }}
            >
              Zuridox{" "}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
