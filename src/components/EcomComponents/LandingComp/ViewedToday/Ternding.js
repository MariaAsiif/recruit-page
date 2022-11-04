import React from "react";
import { CustomCardContainer, StyleTrending } from "./StyleTrending";
import { Placeholder } from "react-bootstrap";
import Slider from "react-slick";
import { BASE_URL, GET_PRODUCTS, IMAGE_URL } from "../../../../utils/config";
import axios from "axios";
import { useQuery } from "react-query";
// import CustomCard from '../../Globals/CustomCard'
import { Card } from "react-bootstrap";
import star from "../../../../assets/landingImages/icons/star.png";
// import { BsHeart } from 'react-icons/bs'
import { RiShoppingCartLine } from 'react-icons/ri'
function Trending({ heading, section }) {
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
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
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



  function add3Dots(string, limit) {
    var dots = "...";
    if (string?.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }

    return string;
  }


  return (
    <StyleTrending>
      <div className="bscontainer">
        <div className="tranding-heading relative">
          <h1 className=" font-medium text-[20px] tranding">Trending Products</h1>
          <hr className="mt-2 ml-5" />
          <hr className="border-[2px] left-4 -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[19%]" />
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
        <div className="mt-10">
          <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading &&
              productData.map((item, index) => (
                <div key={index} className="d-inline-block"  >
                  <CustomCardContainer>
                    <Card className="customCard " >
                      <div className="customCard-body ">
                        <div className="image-section">
                          <img
                            // onClick={() => setModalShow(true)}
                            className="main-img"
                            src={IMAGE_URL + item.productImage}
                            alt="Trending-Now"
                          />
                        </div>
                        <div className="content relative">
                          <div className="title">
                            <h1>{add3Dots(item.title, 30)}</h1>

                          </div>
                          <div className="flex justify-between">
                            <div className="rating ">
                              <div className="stars">
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                              </div>
                              <div className="review">(43 Reviews)</div>
                            </div>
                            <span>${item.price}</span>
                          </div>
                          <div className="absolute w-full left-0 shop_show">
                            <button className="add-to-cart !w-[90%] !bg-[#27D6A5]  ">
                              <RiShoppingCartLine className="text-[20px]" /> Add to Cart <span className="cart"></span>
                            </button>
                          </div>

                        </div>
                      </div>
                    </Card>
                  </CustomCardContainer>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </StyleTrending>
  );
}
export default Trending;
