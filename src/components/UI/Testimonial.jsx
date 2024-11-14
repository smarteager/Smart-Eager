import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <Slider {...settings}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#555", fontSize: "1rem" }}>
            "I rented an AC unit for a summer event, and it worked perfectly!
            The service was prompt and professional. Highly recommend!"
          </p>
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={ava01}
              alt="Customer 1"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h6 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Priya Sharma
              </h6>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>Event Planner</p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#555", fontSize: "1rem" }}>
            "The washing machine rental was a lifesaver during my house
            renovation. Fast delivery and easy setup!"
          </p>
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={ava02}
              alt="Customer 2"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h6 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Rahul Verma
              </h6>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>Homeowner</p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#555", fontSize: "1rem" }}>
            "I recently rented a RO water purifier, and it’s been a game
            changer! Clean water at my convenience."
          </p>
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={ava03}
              alt="Customer 3"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h6 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Sneha Gupta
              </h6>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>Health Conscious</p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: "#555", fontSize: "1rem" }}>
            "I rented construction equipment for my project, and the quality
            was excellent. Will definitely rent again!"
          </p>
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={ava04}
              alt="Customer 4"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h6 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Arjun Mehta
              </h6>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>Contractor</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
