import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/contact.css";

const socialLinks = [
  // {
  //   url: "#",
  //   icon: "ri-facebook-line",
  // },
  {
    url: "https://www.instagram.com/smart_eager_airconditioning/profilecard/?igsh=ZmppZjh5bjFpMDdw",
    icon: "ri-instagram-line",
  },
  // {
  //   url: "#",
  //   icon: "ri-linkedin-line",
  // },
  {
    url: "https://youtube.com/@smart_eager?si=Un9G6htgOv0Wqa7D",
    icon: "ri-youtube-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://print-hub-cb65e-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/"); // Correctly place navigate here after successful submission
      } else {
        throw new Error("Submission failed: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        "An error occurred while submitting the form. Please try again."
      );
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              {submitSuccess && (
                <p style={{ color: "green" }}>Message sent successfully!</p>
              )}
              {submitError && <p style={{ color: "red" }}>{submitError}</p>}

              <Form
                onSubmit={handleSubmit}
                style={{
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
              >
                <FormGroup
                  className="contact__form"
                  style={{ marginBottom: "15px" }}
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "15px",
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className="contact__form"
                  style={{ marginBottom: "15px" }}
                >
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "15px",
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className="contact__form"
                  style={{ marginBottom: "15px" }}
                >
                  <Input
                    name="mobile"
                    placeholder="Mobile Number"
                    type="tel"
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "15px",
                    }}
                  />
                </FormGroup>
                <FormGroup
                  className="contact__form"
                  style={{ marginBottom: "15px" }}
                >
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "15px",
                      width: "100%",
                      borderColor: "#ccc",
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                  ></textarea>
                </FormGroup>

                <button
                  className="contact__btn"
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0056b3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007bff")
                  }
                >
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info" style={{ paddingLeft: "20px" }}>
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Badshahpur Office Teekali-Akhlimpur Road, <br />
                  City- Badshahpur, Haryana, Pin - 122101 <br />
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0"> +91-9306174774</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    Info@smartEager.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                      style={{ fontSize: "20px", color: "#007bff" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
