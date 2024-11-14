import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import ACItem from "./ACItems";

const ACPage = () => {
  const acServices = services.filter((service) => service.code === 100);

  return (
    <Helmet title="Air Conditioners">
      <CommonSection title="Available Air Conditioners" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <ACItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ACPage;
