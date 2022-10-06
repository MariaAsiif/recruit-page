import React from "react";
import { ViewTodayStyle } from "./StyleViewToday";
import { Placeholder } from "react-bootstrap";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS, IMAGE_URL } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
import AdCard from "../../Globals/AdCard";

function ViewedToday({ heading , section }) {
  // const viewTodayImgs = [ViewToday, ViewToday, ViewToday, ViewToday, ViewToday, ViewToday]

  const {
    data: viewTodayImgs,
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

  var settings = {
    arrows: true,
    dots: false,
    autoplay: true,
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
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ViewTodayStyle>
      <div className="container">
        {/* <div className="main-heading">{heading}</div> */}
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
        {/* <ViewTodaySlick></ViewTodaySlick> */}
        <Slider {...settings} className="viewToday-slick">
          {!stateIsLoading &&
            viewTodayImgs && viewTodayImgs.length > 0 ? viewTodayImgs.map((item, index) => (
              <div key={index} className="view-today">
                <AdCard img={item.productImage} />
              </div>
            ))
            : null 
          }
        </Slider>
      </div>
    </ViewTodayStyle>
  );
}

export default ViewedToday;
