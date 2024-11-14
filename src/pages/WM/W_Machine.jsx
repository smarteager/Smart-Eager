import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import ACItem from "../AC/ACItems";

const W_Machine = () => {
  const acServices = services.filter((service) => service.code === 102);

  return (
    <Helmet title="Washing Machine">
      <CommonSection title="Available Washing Machine" />
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

export default W_Machine;
