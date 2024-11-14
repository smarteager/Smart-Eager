import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "../../styles/Privacy_policy.css";
import CommonSection from "../UI/CommonSection";

const ShippingPolicy = () => {
  return (
    <Helmet title="Shipping Policy">
      <CommonSection title="Shipping Policy" />
      <section className="privacy__policy">
        <Container>
          <Row>
            <Col lg="12">
              <div className="privacy__content">
                <PolicySection title="Delivery Schedule and Locations">
                  <p>
                    We offer delivery, installation, and pick-up services every day of the week. If your building lacks a lift or you do not have permission to use it, additional labor charges may apply for carrying products up stairs. Currently, our services cover the following areas:Maneshar , Badshahpur, Sector 49, Sector 70, Sector 71, Sector 69, Sector 75, Sector 70A, Sector 66, Sector 67, Sector 67A, Sector 64, Sector 63, Sector 62, Sector 55, Sector 54, Sector 56, Sector 53, Sector 42, and various other sectors including 44, 45, 38, 34, 33, 10, 11, 37, 37B, and 37D. Please be aware that installation for air conditioning units will incur additional fees, which we will inform you about prior to finalizing your order.
                  </p>
                </PolicySection>

                <PolicySection title="Relocation Assistance">
                  <p>
                    We provide complimentary relocation services within the city for items rented from us. If you are moving to another city where we operate, you can rent similar products at that location. This relocation service is available only once during the duration of your rental contract.
                  </p>
                </PolicySection>

                <PolicySection title="Delivery in Your Absence">
                  <p>
                    If you are unavailable at home during the delivery, please notify us in advance about who will receive the items on your behalf. We will require an acknowledgment email from you, along with the government ID proof of the designated recipient. This procedure ensures that your order is delivered safely.
                  </p>
                </PolicySection>

                <PolicySection title="Lift Accessibility Issues">
                  <p>
                    If your building does not have a lift or if you are unable to use it, extra labor charges will apply for transporting products via stairs. The amount will vary based on the size of your order and the floor it needs to reach.
                  </p>
                </PolicySection>

                <PolicySection title="Vehicle Access Restrictions">
                  <p>
                    It is your responsibility to ensure that the delivery vehicle is allowed entry into your premises. Frequently, parking restrictions prevent delivery vehicles from stopping on the street. Additionally, please ensure that you have completed any necessary documentation and payment arrangements with your landlord prior to delivery.
                  </p>
                </PolicySection>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const PolicySection = ({ title, children }) => (
  <div className="policy__section">
    <h4 className="section__title">{title}</h4>
    {children}
  </div>
);

export default ShippingPolicy;
