import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import InverterItem from "./InverterItem";

const InverterPage = () => {
  const acServices = services.filter((service) => service.code === 106);

  return (
    <Helmet title="Inverters">
      <CommonSection title="Available Inverters" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <InverterItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default InverterPage;
