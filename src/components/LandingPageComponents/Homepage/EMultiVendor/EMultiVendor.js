import React from "react";
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
import VideoModal from "../VideoModal/VideoModal";

var settings = {
  dots: false,
  infinite: false,
  arrows: false,
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
       <VideoModal
        show={true}
        // onHide={() => setModalShow(false)}
        setModalShow={false}
        // children={<ProductModalDetail desc={desc} img={img} title={title} price={price} />}
      />
      <div className="bscontainer-fluid overflow-hidden">
        <EvendorHeading style={{ textTransform: "Captilize !important" }}>
          <span style={{textTransform: "lowercase" }}>e</span>
          Commerce Multivendor Marketplace
        </EvendorHeading>
        <p style={{fontSize:'18px'}}>WHERE MERCHANTS MEET BUYERS</p>
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
      </div>
    </EVendorMain>
  );
};

export default EMultiVendor;
