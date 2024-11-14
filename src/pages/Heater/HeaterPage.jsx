import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import HeaterItem from "./HeaterItem";

const HeaterPage = () => {
  const acServices = services.filter((service) => service.code === 107);

  return (
    <Helmet title="Construction">
      <CommonSection title="Available Room Heaters" />

      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <HeaterItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HeaterPage;
