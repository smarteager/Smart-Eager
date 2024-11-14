import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "../../styles/Privacy_policy.css";
import CommonSection from "../UI/CommonSection";

const CancelRefPol = () => {
  return (
    <Helmet title="Cancellation & Return Policy">
      <CommonSection title="Cancellation & Return Policy" />
      <section className="privacy__policy">
        <Container>
          <Row>
            <Col lg="12">
              <div className="privacy__content">
                <PolicySection title="How Can I Modify My Order, and Until When?">
                  <p>
                    You can make modifications to your order up to one day
                    before the scheduled delivery date by contacting our
                    customer support via the helpline, website/app chat, or
                    email. Please be aware that the date and time of delivery
                    may change as a result of order modifications. When you
                    change your order, both the rent and deposit will be
                    adjusted according to the current rates applicable at the
                    time of the modification. Once confirmed, your monthly
                    rental fee will be recalculated based on the newly selected
                    items. Additionally, as a customer bound by the rental
                    agreement, you cannot relocate the products from the
                    specified delivery address without informing{" "}
                    <b>Smart Eager</b>. If you need to change your address and
                    require relocation assistance, please notify us at least two
                    weeks prior to the move or submit a relocation request
                    through your customer dashboard.
                  </p>
                </PolicySection>

                <PolicySection title="Can I Return Some or All Items If I’m Unsatisfied With Them Upon Delivery?">
                  <p>
                    Yes, you may return any items at the time of delivery if you
                    are dissatisfied with their condition due to defects or
                    non-functionality. If you notify us during delivery, we can
                    consider exceptions based on valid circumstances.
                  </p>
                </PolicySection>

                <PolicySection title="What Are the Charges for Early Closure?">
                  <p>
                    If you decide to return the products before the end of your
                    selected rental term, an Early Closure Charge will apply.
                    This fee is calculated based on your chosen duration and the
                    category of the items. The charge is a multiple of your
                    Monthly Rent, determined by the remaining tenure of your
                    contract.
                  </p>
                </PolicySection>

                <PolicySection title="How Do I Receive My Refundable Deposit?">
                  <p>
                    Once your rented products pass a quality check and all
                    pending dues are cleared, a refund will be initiated to your
                    designated account. This amount will be credited within 7-9
                    business days. Please ensure that the bank account details
                    provided are under the name of the customer who placed the
                    order. In the event of any damages to the rented items,{" "}
                    <b>Smart Eager</b> will assess the products at our warehouse
                    to determine the cost of damages. The damage costs will be
                    deducted from your refundable deposit amount.
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

export default CancelRefPol;
