import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import RefItem from "./RefrigeratorItem";


const RefPage = () => {
  const acServices = services.filter((service) => service.code === 104);

  return (
    <Helmet title="Refrigerator">
      <CommonSection title="Available Refrigerators" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <RefItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default RefPage;
