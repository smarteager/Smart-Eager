import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "../../styles/Privacy_policy.css";
import CommonSection from "../UI/CommonSection";

const TAndCPolicy = () => {
  return (
    <Helmet title="Terms & Conditions">
      <CommonSection title="Terms & Conditions" />
      <section className="privacy__policy">
        <Container>
          <Row>
            <Col lg="12">
              <div className="privacy__content">
                <PolicySection title="Payment Policy">
                  <p>
                    The rental fee, security deposit, and any additional charges must be paid in full at the time of AC delivery or installation.
                  </p>
                </PolicySection>

                <PolicySection title="Accepted Payment Methods">
                  <p>
                    Google Pay, PhonePe, Paytm, UPI, IMPS, Net banking, direct bank transfer, and cash are all accepted.
                  </p>
                </PolicySection>

                <PolicySection title="Security Deposit">
                  <p>
                    A refundable security deposit of ₹2,000 is required and will be refunded at the time of product pickup.
                  </p>
                </PolicySection>

                <PolicySection title="Refund Policy">
                  <p>
                    The rental amount is non-refundable even if the rented products are returned early (only the security deposit is refundable).
                  </p>
                </PolicySection>

                <PolicySection title="Delivery Policy">
                  <p>
                    The customer or a representative must be present at the specified date and time to verify the item's condition upon delivery, which must be returned in the same condition.
                  </p>
                  <p>
                    Delivered items can only be returned if they have significant defects or are non-functional. If an order is canceled post-delivery, a cancellation fee of ₹1,000 will apply.
                  </p>
                </PolicySection>

                <PolicySection title="Pickup Policy">
                  <p>
                    Customers must notify us at least one week in advance for the product pickup.
                  </p>
                </PolicySection>

                <PolicySection title="Damage Policy">
                  <p>
                    The customer is liable for any damages, loss, or theft of products and will be charged at the product's market value.
                  </p>
                </PolicySection>

                <PolicySection title="Maintenance Policy">
                  <p>
                    Product repair and maintenance are covered by our team at no additional cost, with a visit fee of ₹100/200 applicable based on distance, during the rental period.
                  </p>
                </PolicySection>

                <PolicySection title="Relocation Policy">
                  <p>
                    Relocating the rented item to another location is prohibited. The item must remain at the original delivery and installation site. If the customer relocates the item independently, they will assume responsibility for all maintenance, and the security deposit will be forfeited.
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

export default TAndCPolicy;
