import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import AllItems from "../AllProducts/AllProductItems";
import SeasonCard from "../Season_Homepage";

const AllProduct = () => {
  return (
    <Helmet title="All Products">
      <CommonSection title="Available Products" />
      <section style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Container style={{ marginBottom: 0, paddingBottom: 0 }}>
          <SeasonCard />
          <Row>
            {services.map((item) => (
              <Col lg="4" md="6" key={item.id}>
                <AllItems item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllProduct;
