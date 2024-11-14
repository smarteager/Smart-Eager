import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import WinterItem from "./WinterItem";

const WinterPage = () => {
  const acServices = services.filter(
    (service) =>
      service.code === 105 || service.code === 107
  );

  return (
    <Helmet title="Winter Products">
      <CommonSection title="Available Products for Winter" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <WinterItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default WinterPage;
