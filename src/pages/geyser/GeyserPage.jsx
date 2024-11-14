import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import GeyserItem from "./GeyserItem";

const GeyserPage = () => {
  const acServices = services.filter((service) => service.code === 105);

  return (
    <Helmet title="Geysers">
      <CommonSection title="Available Geysers" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <GeyserItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default GeyserPage;
