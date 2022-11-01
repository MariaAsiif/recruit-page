import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  TrustedSuppliersImg,
  TrustedSuppliersImgContainer,
  TrustedSuppliersMainContainer,
  TrustedCompanyContainer,
} from "./StyeldTrustedSuppliers";
import { Container } from "react-bootstrap";

const TrustedSuppliers = ({ imgs, head, id }) => {
  var settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[2rem]">
      <div className="bscontainer">
        <div className="tranding-heading relative">
          <h1 className=" font-medium text-[20px]">Trusted International Organizations</h1>
          <hr className="mt-2 ml-5" />
          <hr className="border-[2px] left-1 -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[33%]" />
        </div>
        <TrustedCompanyContainer id={id}>
          <Container>
            <Slider {...settings} className="trusted-suppliers-slick">
              {imgs.map((supplierImg, index) => (
                <div key={index}>
                  <TrustedSuppliersImgContainer>
                    <TrustedSuppliersImg src={supplierImg} alt={supplierImg} />
                  </TrustedSuppliersImgContainer>
                </div>
              ))}
            </Slider>
          </Container>
        </TrustedCompanyContainer>
      </div>
    </div>
  );
};

export default TrustedSuppliers;
