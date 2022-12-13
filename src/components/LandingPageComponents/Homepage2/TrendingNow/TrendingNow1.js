import React from "react";
import { StyleTrending } from "./StyleTrendingNow1";
import { Placeholder } from "react-bootstrap";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS, IMAGE_URL } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
import CustomCard from '../../Globals/CustomCard'

function TrendingNow1({ heading, description , section }) {
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
        data.data.data.filter((item) => item.productType === section),
      enabled: true,
    }
  );

  // console.log("section" , section )

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <StyleTrending>
      <div className="bscontainer-fluid">
        <div className="tranding-heading">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        {stateIsLoading && (
          <div>
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
        )}
        <div className="">
          <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading &&
              productData?.map((item, index) => (
                <div key={index}   >
                  <CustomCard desc={item.description} img={item.productImage} title={item.title} price={item.price} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </StyleTrending>
  );
}
export default TrendingNow1;
