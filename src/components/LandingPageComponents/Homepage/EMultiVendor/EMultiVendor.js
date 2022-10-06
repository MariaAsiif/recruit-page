import React from "react";
import { PrimaryHeading } from "../../Globals/Globals";
import EVendorSlick from "./EVendorSlick";
import {
  EvendorHeading,
  EVendorMain,
  EVendorViewMoreBtn,
} from "./StyledEVendor";
import Slider from "react-slick";
import CustomCard from "../../Globals/CustomCard";
import { BASE_URL, GET_PRODUCTS } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";

var settings = {
  dots: false,
  infinite: false,
  arrows: true,
  autoplay:true,
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
const EMultiVendor = () => {
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
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      select: (data) =>
        data.data.data.filter((item) => item.productType === "marketPlace"),
      enabled: true,
    }
  );


  return (
    <EVendorMain>
      <Container>
        <EvendorHeading style={{ textTransform: "Captilize !important" }}>
          <span style={{ color: "red", textTransform: "lowercase" }}>e</span>
          Commerce Multivendor Marketplace
        </EvendorHeading>
        <p>WHERE MERCHANTS MEET BUYERS</p>
        {stateIsLoading && <h1>Loading...</h1>}
        <Slider {...settings} className="EVendor-slick">
          {!stateIsLoading && productData && productData.map((item, index) => {
            return (
              <CustomCard
                img={item.productImage}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </Slider>

        {/* <div className="evendor-2">
          <EVendorSlick />
        </div> */}
        <EVendorViewMoreBtn>View More</EVendorViewMoreBtn>
      </Container>
    </EVendorMain>
  );
};

export default EMultiVendor;
