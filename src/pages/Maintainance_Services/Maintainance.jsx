import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaTools,
  FaUserCog,
  FaStar,
  FaBolt,
  FaClock,
  FaShieldAlt,
  FaMoneyBill,
  FaWrench,
  FaCheckCircle,
  FaUserTie,
  FaCalendarCheck,
  FaMedal,
} from "react-icons/fa";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 60vh;
  padding-top: 90px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  max-width: 80%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #002e5f, #004a9f);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 46, 95, 0.3);
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: #f8f9fa;
    border-radius: 8px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(5px);
      background: #e9ecef;
    }
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureColumn = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  h2 {
    color: #002e5f;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: #f8f9fa;
    border-radius: 8px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(5px);
      background: #e9ecef;
    }

    .icon {
      color: #002e5f;
      font-size: 1.5rem;
    }
  }
`;

const ReviewSliderSection = styled.section`
  padding: 4rem 0;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  animation: scroll 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ReviewSliderCard = styled.div`
  flex: 0 0 350px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  .review-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .profile-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #002e5f;
  }

  .user-info {
    flex: 1;
    .name {
      font-weight: bold;
      color: #002e5f;
    }
    .location {
      color: #666;
      font-size: 0.9rem;
    }
  }

  .rating {
    color: #ffc107;
    display: flex;
    gap: 0.2rem;
  }

  .review-text {
    color: #444;
    line-height: 1.6;
  }
`;

const ACRepairService = () => {
  const ReviewSlider = ({ reviews }) => {
    const sliderTrackRef = useRef(null);

    useEffect(() => {
      const track = sliderTrackRef.current;
      if (track) {
        const clonedItems = [...track.children].map((item) =>
          item.cloneNode(true)
        );
        clonedItems.forEach((item) => track.appendChild(item));
      }
    }, []);

    return (
      <ReviewSliderSection>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          What Our Customers Say
        </h2>
        <SliderContainer>
          <SliderTrack ref={sliderTrackRef}>
            {reviews.map((review, index) => (
              <ReviewSliderCard key={index}>
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="profile-image"
                  />
                  <div className="user-info">
                    <div className="name">{review.name}</div>
                    <div className="location">{review.location}</div>
                    <div className="rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review-text">
                  "{review.text.substring(0, 120)}..."
                </div>
              </ReviewSliderCard>
            ))}
          </SliderTrack>
        </SliderContainer>
      </ReviewSliderSection>
    );
  };

  const maintenanceFeatures = [
    { icon: <FaBolt />, text: "Improve Cooling" },
    { icon: <FaMoneyBill />, text: "Reduce Electricity Bills" },
    { icon: <FaClock />, text: "Increase Appliance Lifespan" },
    { icon: <FaTools />, text: "Minimize Breakdowns" },
    { icon: <FaShieldAlt />, text: "Enhance Energy Efficiency" },
    { icon: <FaWrench />, text: "Maximize Performance" },
  ];

  const reviews = [
    {
      name: "Renu Mann",
      location: "Delhi",
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "I am happy with your service. Overall it's been a great experience, right from buying your service to availing it. Thanks for the timely service and follow ups.",
    },
    {
      name: "Tapan Roy",
      location: "Delhi",
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "I just had to make one call requesting for service and the engineer was home the next day with all the necessary tools. I highly recommend your service to everyone.",
    },
    {
      name: "Ajay Gahlot",
      location: "Delhi",
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Kudos to team Smart Eager for the great service. I wasn't sure about buying the plan initially but now I'm sure about extending it for longer.",
    },
    {
      name: "Taufique Alam",
      location: "Delhi",
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "I am very happy with the quality service you provided. I contacted Smart Eager to check my AC, as there was no cooling and they sent an engineer next day itself for gas charging. He was polite and shared basic tips to maintain the AC.",
    },
  ];
  

  const serviceFeatures = [
    { icon: <FaWrench />, text: "AC Repair & Service" },
    { icon: <FaCheckCircle />, text: "Refrigerator Repair & Service" },
    { icon: <FaUserTie />, text: "RO Water Purifier Repair & Service" },
    { icon: <FaCalendarCheck />, text: "Geyser Repair & Service" },
    { icon: <FaMedal />, text: "Certified Technicians" },
  ];

  const benefits = [
    {
      icon: <FaUserCog />,
      title: "Trained Technicians",
      description: "Our technicians are highly skilled and certified.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Guaranteed Satisfaction",
      description:
        "Customer satisfaction is our top priority. We ensure quality service every time.",
    },
    {
      icon: <FaStar />,
      title: "Affordable Pricing",
      description:
        "Our services are competitively priced to give you the best value.",
    },
  ];

  return (
    <Container>
      <HeroSection>
        <ImageContainer>
          <StyledImage
            src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg"
            alt="AC Repair and Other Services"
          />
        </ImageContainer>

        <ContentSection>
          <h1>Home Appliance Repair and Service in DELHI, GURUGRAM, MANESAR</h1>
          <p>
            Sit back, relax, and let us take care of your AC, Refrigerator, RO Water Purifier, and Geyser servicing & repairs.
          </p>
          <Link to="/BookingForm">
            <Button>Get Started</Button>
          </Link>
        </ContentSection>
      </HeroSection>

      <TwoColumnLayout>
        {/* Left Column */}
        <FeatureColumn>
          <h2>Regular Appliance Maintenance Helps To</h2>
          <div className="feature-list">
            {maintenanceFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="icon">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </FeatureColumn>

        {/* Right Column */}
        <FeatureColumn>
          <h2>Appliance Repairs & Maintenance Services</h2>
          <div className="feature-list">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="icon">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </FeatureColumn>
      </TwoColumnLayout>

      <FeatureCard>
        <h2>Why Choose Us?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <span style={{ fontSize: "2.5rem", color: "#002e5f" }}>
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </FeatureCard>

      <ReviewSlider reviews={reviews} />
    </Container>
  );
};

export default ACRepairService;
