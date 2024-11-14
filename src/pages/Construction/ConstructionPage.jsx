import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import ConstructionItem from "./ConstructionItem";

const ConstructionPage = () => {
  const acServices = services.filter((service) => service.code === 109);

  return (
    <Helmet title="Construction">
      <CommonSection title="Available Construction Equipment" />
      
      <section>
        <Container>
          <Row>
            {acServices.map((item) => (
              <Col lg="4" md="6" key={item.code}>
                <ConstructionItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ConstructionPage;
