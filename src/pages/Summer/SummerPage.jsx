import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import SummerItem from "./SummerItem";

const SummerPage = () => {
  const acServices = services.filter(
    (service) => service.code === 104 || service.code === 100
  );

  return (
    <Helmet title="Summer Products">
      <CommonSection title="Available Products for Summer" />
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <SummerItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SummerPage;
