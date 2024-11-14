import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import ROItem from "./ROItem";

const ROPage = () => {
  const acServices = services.filter((service) => service.code === 103);

  return (
    <Helmet title="RO Water Purifires">
      <CommonSection title="Available RO Water Purifires" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <ROItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ROPage;
