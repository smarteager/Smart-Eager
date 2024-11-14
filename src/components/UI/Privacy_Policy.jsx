import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "../../styles/Privacy_policy.css";
import CommonSection from "./CommonSection";

const PrivacyPolicy = () => {
  return (
    <Helmet title="Privacy Policy">
      <CommonSection title="Privacy Policy" />
      <section className="privacy__policy">
        <Container>
          <Row>
            <Col lg="12">
              <div className="privacy__content">
                <h2 className="policy__title">Terms & Conditions</h2>

                <PolicySection title="Payment Policy">
                  <p>
                    The rental fee, security deposit, and any additional charges
                    must be paid in full at the time of AC delivery or
                    installation.
                  </p>
                </PolicySection>

                <PolicySection title="Accepted Payment Methods">
                  <p>
                    Google Pay, PhonePe, Paytm, UPI, IMPS, Net banking, direct
                    bank transfer, and cash are all accepted.
                  </p>
                </PolicySection>

                <PolicySection title="Security Deposit">
                  <p>
                    A refundable security deposit of ₹2,000 is required and will
                    be refunded at the time of product pickup.
                  </p>
                </PolicySection>

                <PolicySection title="Refund Policy">
                  <p>
                    The rental amount is non-refundable even if the rented
                    products are returned early (only the security deposit is
                    refundable).
                  </p>
                </PolicySection>

                <PolicySection title="Delivery Policy">
                  <p>
                    The customer or a representative must be present at the
                    specified date and time to verify the item's condition upon
                    delivery, which must be returned in the same condition.
                  </p>
                  <p>
                    Delivered items can only be returned if they have
                    significant defects or are non-functional. If an order is
                    canceled post-delivery, a cancellation fee of ₹1,000 will
                    apply.
                  </p>
                </PolicySection>

                <PolicySection title="Pickup Policy">
                  <p>
                    Customers must notify us at least one week in advance for
                    the product pickup.
                  </p>
                </PolicySection>

                <PolicySection title="Damage Policy">
                  <p>
                    The customer is liable for any damages, loss, or theft of
                    products and will be charged at the product's market value.
                  </p>
                </PolicySection>

                <PolicySection title="Maintenance Policy">
                  <p>
                    Product repair and maintenance are covered by our team at no
                    additional cost, with a visit fee of ₹100/200 applicable
                    based on distance, during the rental period.
                  </p>
                </PolicySection>

                <PolicySection title="Relocation Policy">
                  <p>
                    Relocating the rented item to another location is
                    prohibited. The item must remain at the original delivery
                    and installation site. If the customer relocates the item
                    independently, they will assume responsibility for all
                    maintenance, and the security deposit will be forfeited.
                  </p>
                </PolicySection>

                {/* New Sections Added Below */}
                <PolicySection title="Shipping Policy">
                  <h5>Delivery Schedule and Locations</h5>
                  <p>
                    We offer delivery, installation, and pick-up services every
                    day of the week. If your building lacks a lift or you do not
                    have permission to use it, additional labor charges may
                    apply for carrying products up stairs. Currently, our
                    services cover the following areas: Maneshar , Badshahpur, Sector 49,
                    Sector 70, Sector 71, Sector 69, Sector 75, Sector 70A,
                    Sector 66, Sector 67, Sector 67A, Sector 64, Sector 63,
                    Sector 62, Sector 55, Sector 54, Sector 56, Sector 53,
                    Sector 42, and various other sectors including 44, 45, 38,
                    34, 33, 10, 11, 37, 37B, and 37D. Please be aware that
                    installation for air conditioning units will incur
                    additional fees, which we will inform you about prior to
                    finalizing your order.
                  </p>
                  <h5>Relocation Assistance</h5>
                  <p>
                    We provide complimentary relocation services within the city
                    for items rented from us. If you are moving to another city
                    where we operate, you can rent similar products at that
                    location. This relocation service is available only once
                    during the duration of your rental contract.
                  </p>
                  <h5>Delivery in Your Absence</h5>
                  <p>
                    If you are unavailable at home during the delivery, please
                    notify us in advance about who will receive the items on
                    your behalf. We will require an acknowledgment email from
                    you, along with the government ID proof of the designated
                    recipient. This procedure ensures that your order is
                    delivered safely.
                  </p>
                  <h5>Lift Accessibility Issues</h5>
                  <p>
                    If your building does not have a lift or if you are unable
                    to use it, extra labor charges will apply for transporting
                    products via stairs. The amount will vary based on the size
                    of your order and the floor it needs to reach.
                  </p>
                  <h5>Vehicle Access Restrictions</h5>
                  <p>
                    It is your responsibility to ensure that the delivery
                    vehicle is allowed entry into your premises. Frequently,
                    parking restrictions prevent delivery vehicles from stopping
                    on the street. Additionally, please ensure that you have
                    completed any necessary documentation and payment
                    arrangements with your landlord prior to delivery.
                  </p>
                </PolicySection>

                <PolicySection title="Cancellation & Return Policy">
                  <h5>How Can I Modify My Order, and Until When?</h5>
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
                    specified delivery address without informing Smart Eager. If
                    you need to change your address and require relocation
                    assistance, please notify us at least two weeks prior to the
                    move or submit a relocation request through your customer
                    dashboard.
                  </p>
                  <h5>
                    Can I Return Some or All Items If I’m Unsatisfied With Them
                    Upon Delivery?
                  </h5>
                  <p>
                    Yes, you may return any items at the time of delivery if you
                    are dissatisfied with their condition due to defects or
                    non-functionality. If you notify us during delivery, we can
                    consider exceptions based on valid circumstances.
                  </p>
                  <h5>What Are the Charges for Early Closure?</h5>
                  <p>
                    If you decide to return the products before the end of your
                    selected rental term, an Early Closure Charge will apply.
                    This fee is calculated based on your chosen duration and the
                    category of the items. The charge is a multiple of your
                    Monthly Rent, determined by the remaining tenure of your
                    contract.
                  </p>
                  <h5>How Do I Receive My Refundable Deposit?</h5>
                  <p>
                    Once your rented products pass a quality check and all
                    pending dues are cleared, a refund will be initiated to your
                    designated account. This amount will be credited within 7-9
                    business days. Please ensure that the bank account details
                    provided are under the name of the customer who placed the
                    order. In the event of any damages to the rented items,
                    Smart Eager will assess the products at our warehouse to
                    determine the cost of damages. The damage costs will be
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

// Helper component for policy sections
const PolicySection = ({ title, children }) => (
  <div className="policy__section">
    <h4 className="section__title">{title}</h4>
    {children}
  </div>
);

export default PrivacyPolicy;
