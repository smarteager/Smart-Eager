import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/1.jpg";
import ava02 from "../../assets/all-images/2.jpg";
import ava03 from "../../assets/all-images/3.jpg";
import ava04 from "../../assets/all-images/4.jpg";


const OUR__MEMBERS = [
  {
    name: "Mr Dayaram",
    experience: "8 years of experience",
    post: "Sr. Manager",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Mr. Gaurav Parashar",
    experience: "11 years of experience",
    post: "Sr Technician",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Mr. Sachin Sain",
    experience: "6 years of experience",
    post: "Sr Technician",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  // {
  //   name: "Govind Sharma",
  //   experience: "Marketing",
  //   fbUrl: "#",
  //   instUrl: "#",
  //   twitUrl: "#",
  //   linkedinUrl: "#",
  //   imgUrl: ava01,
  // },

  // {
  //   name: "Aslam",
  //   experience: "Junior Technician",
  //   fbUrl: "#",
  //   instUrl: "#",
  //   twitUrl: "#",
  //   linkedinUrl: "#",
  //   imgUrl: ava02,
  // },
  {
    name: "Imran Khan",
    experience: "5 years of experience",
    post: "Marketing",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
            <p className="section__description text-center">
              {item.post}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
