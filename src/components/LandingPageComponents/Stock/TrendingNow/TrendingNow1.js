import React, { useState } from "react";
import { StyleTrending } from "./StyleTrendingNow1";
import { Placeholder } from "react-bootstrap";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS, IMAGE_URL } from "../../../../services/config";
import axios from "axios";
import { useQuery } from "react-query";
import CustomCard from '../../Globals/CustomCard'
// import ViewMore from "../ViewMore/ViewMore";

// import { SliderComponent } from '@syncfusion/ej2-react-inputs'
function TrendingNow1({ heading, description, section }) {



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
    autoplay:true ,
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
      <div className="container">
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
        <div className="row">
          <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading &&
              productData.splice(1).map((item, index) => (
                <div key={index} className="col-md-3 mb-4"  >
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
