import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";


const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">Rent an AC for Just $50/Da</h4> */}
            <h1 className="text-light mb-4">Beat the Heat and go the chill</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">Washing Machine Rental at $30/Day</h4> */}
            <h1 className="text-light mb-4">Beat the chill and go the Heat</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">
              Cooling solutions for every home
            </h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">
              Quality service at affordable prices
            </h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-05 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">
              Quality service at reasonable prices!
            </h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-06 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">
              We treat your home like you treat your home
            </h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/home/allproducts">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
