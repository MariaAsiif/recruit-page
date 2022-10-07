import React from "react";
import { StyleTrending, TrendNowInner } from "./StyleTrendingNow";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
import CustomCard from "../../Globals/CustomCard";

function TrendingNow({ heading, imgs }) {
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
        data.data.data.filter((item) => item.productType === "manProduct"),
      enabled: true,
    }
  );

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
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

  const style = {
    borderBottom: "1px solid #DADADA",
    paddingBottom: "1rem",
  };

  return (
    <StyleTrending>
      <TrendNowInner>
        <div className="container">
          <h1 style={style} className="main-heading">
            {heading}
          </h1>
          {stateIsLoading && <h1>Loading...</h1>}
          <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading &&
              productData.map((item, index) => (
                <div key={index} className="d-inline-block">
                  <h5 className="outside-card-text">{item.title}</h5>
                  <CustomCard
                    img={item.productImage}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </TrendNowInner>
    </StyleTrending>
  );
}
export default TrendingNow;
