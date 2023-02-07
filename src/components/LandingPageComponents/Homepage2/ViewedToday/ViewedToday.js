import React from "react";
import { ViewTodayStyle } from "./StyleViewToday";
import { Placeholder } from "react-bootstrap";
import Slider from "react-slick";
import AdCard from "../../Globals/AdCard";
import ad1 from '../../../../assets/Stocks/ads-1.png'
import ad2 from '../../../../assets/Stocks/ads-2.png'
import ad3 from '../../../../assets/Stocks/ads-3.png'
import usa from "../../../../assets/landingImages/usa.png";
import flag from '../../../../assets/landingImages/flag.svg'
function ViewedToday({ heading, section }) {
  // const viewTodayImgs = [ViewToday, ViewToday, ViewToday, ViewToday, ViewToday, ViewToday]


  const images = [{img : ad1 , flg :usa }  ,{ img: ad2 , flg:flag }, {img: ad3, flg:usa}, {img : ad1 , flg :usa }  ,{ img: ad2 , flg:flag }, {img: ad3, flg:usa} ]



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
      <div className="bscontainer-fluid mt-[2rem]">
        {/* <div className="main-heading">{heading}</div> */}
        {/* {stateIsLoading && (
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
        )} */}
        {/* <ViewTodaySlick></ViewTodaySlick> */}
        <Slider {...settings} className="viewToday-slick">
          {
            images && images.length > 0 ? images.map((item, index) => (
              <div key={index} className="view-today ">
                <AdCard item={item}  />
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
