import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import evendor1 from "../../../../assets/landingImages/evendor1.png";
import evendor2 from "../../../../assets/landingImages/evendor2.jpeg";
import evendor3 from "../../../../assets/landingImages/evendor3.png";
import evendor4 from "../../../../assets/landingImages/evendor4.png";
import mini1 from "../../../../assets/landingImages/evendorMini1.svg";
import mini2 from "../../../../assets/landingImages/evendorMini2.svg";

import hprox from "../../../../assets/landingImages/eVendorHprox.svg";
import fairman from "../../../../assets/landingImages/eVendorFairman.svg";
import medi from "../../../../assets/landingImages/eVendorMedi.svg";
import Flag_of_Canada from "../../../../assets/landingImages/Flag_of_Canada.svg";

import { Container } from "react-bootstrap";
import EVendorCard from "./EVendorCard";
const EVendorSlick = () => {
  const eVendorData = [
    { img: evendor1, flag: mini1, flag1: mini2, miniImg: hprox },
    { img: evendor2, flag: mini1, flag1: null, miniImg: fairman },
    { img: evendor3, flag: mini1, flag1: null, miniImg: medi },
    { img: evendor1, flag: mini1, flag1: mini2, miniImg: hprox },
    { img: evendor2, flag: mini1, flag1: null, miniImg: fairman },
    { img: evendor3, flag: mini1, flag1: null, miniImg: medi },
  ];
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slick-container">
      <Container>
        <Slider {...settings} className="EVendor-slick">
          {eVendorData.map((data, index) => {
            const { img, flag, flag1, miniImg } = data;
            return (
              <EVendorCard
                number={index}
                img={img}
                flag={flag}
                flag1={flag1}
                Flag_of_Canada={Flag_of_Canada}
                miniImg={miniImg}
              />
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default EVendorSlick;
