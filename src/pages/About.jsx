import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import SetFor3rd from "../assets/all-images/refrigerator-Repair.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={SetFor3rd} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Your Trusted Partner for Affordable Rental Solutions
                </h2>

                <p className="section__description">
                  At <b>Smart Eager Enterprise</b>, we offer a wide range of
                  affordable, high-quality rental solutions tailored to make
                  your life easier. From essential home appliances like ACs,
                  refrigerators, and washing machines to seasonal items like
                  room heaters and geysers, we ensure comfort and convenience
                  for every season.
                </p>

                <p className="section__description">
                  Need a reliable RO water purifier for clean drinking water or
                  a TV for entertainment? We’ve got you covered! Additionally,
                  our inverter rentals keep you powered during outages, while
                  construction equipment and stabilizer rentals support your
                  project needs. For added convenience, we also provide
                  professional electrician and plumber services. With us,
                  renting is simple, cost-effective, and worry-free—perfect for
                  any situation.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91-9306174774</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
