import React, { useRef } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { StyleHemp } from "./StyleHempProduct";
import HempCardIcon from "../../../../assets/landingImages/HempCardIcon.svg";
import Slider from "react-slick";
// import Banner from "./Banner";
import slidenext from "../../../../assets/landingImages/icons/angle-right.png";
import slideprev from "../../../../assets/landingImages/icons/angle-left.png";
// import cardimage from "../../../../assets/landingImages/card-img.png";
import { BASE_URL, GET_PRODUCTS, IMAGE_URL } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";

function HempProduct() {
  const customeSlider = useRef();
  // const hempImgs = [
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  //   HempCardIcon,
  // ];

  const {
    data: productData,
    isSuccess: stateIsSuccess,
    isLoading: stateIsLoading,
    isFetching: stateIsFetching,
    error: stateError,
    isError: stateIsError,
  } = useQuery(
    "products",
    () => {
      return axios.get(BASE_URL + GET_PRODUCTS);
    },
    {
      refetchInterval: false,
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      select: (data) =>
        data.data.data.filter((item) => item.productType === "topCategory"),
      enabled: true,
    }
  );

  var settings = {
    arrows: true,
    dots: false,
    autoplay:true ,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
  if (!productData) {
    return (
      <div className="container" >
        <Placeholder as="p" animation="glow" size="lg">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="glow" size="lg">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="glow" size="lg">
          <Placeholder xs={12} />
        </Placeholder>

      </div>
    )
  }

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <StyleHemp>
      <div className="bscontainer">
        <div className="row">
          <div className="col-lg-3">
            <div className="top-categories">
              <h1>The best Top Categories</h1>
              <span className="text-[15px] text-gray-400">lorem ipsum dolor</span>
              <div className="slick-btns mt-2">
                <button onClick={next} type="button" className="prev-btn">
                  <img src={slideprev} alt="Pre icon" />
                </button>
                <button onClick={previous} type="butotn" className="next-btn">
                  <img src={slidenext} alt="Next icon" />
                </button>
              </div>
            </div>

          </div>
          <div className="col-lg-9">
            <Slider ref={customeSlider} {...settings} className="hemp-slick">
              {!stateIsLoading &&
                productData.map((item, index) => (
                  <div key={index}>
                    <Card className="cards">
                      <div className="card-body">
                        <img
                          src={IMAGE_URL + item.productImage}
                          className="cardimage"
                          alt="cardimage"
                        />
                        <div className="absolute top-0 w-full h-full  bg-black opacity-[0.8]">
                          <h1 className="!text-[20px]  !text-white text-right absolute right-3 bottom-7 !leading-normal ">{item.title}</h1>
                          <span className="!text-[16px]  !text-white !text-right right-3 bottom-1 absolute  ">{item.price}k Products</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
 
      </div>
    </StyleHemp>
  );
}

export default HempProduct;
