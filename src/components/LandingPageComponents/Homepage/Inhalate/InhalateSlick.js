import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import inhalte1 from "../../../../assets/landingImages/inhalate3.jpg";
import inhalate4 from "../../../../assets/landingImages/inhalate5.jpg";
import playButton from "../../../../assets/landingImages/play-outline-button.svg";
import {
  InhalatedImgContainer,
  InhalteImg,
  QuickShopBtn,
} from "./StyledInhalate";
import { ViewMoreBtn } from "../../Globals/Globals";
import "./style.css";
import VideoModal from "../VideoModal/VideoModal";
import Popup from "../Popup/Popup";

const InhalateSlick = () => {
  const imgContainer = [
    {
      img: inhalte1,
      index: 1,
    },
    {
      img: inhalate4,
      index: 2,
    },
    {
      img: inhalte1,
      index: 1,
    },
    {
      img: inhalate4,
      index: 2,
    },
  ];
  const [modalShow, setModalShow] = useState(false);
  const [specifiedVideo, setspecifiedVideo] = useState("");

  const data = localStorage.getItem("ageGateActive");

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const OpenModalHandler = (index) => {
    setModalShow(true);
    setspecifiedVideo(index);
  };

  return (
    <div className="slick-main-div">
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={
          data !== "active" ? (
            <Popup setModalShow={setModalShow} />
          ) : (
            <div>
              {specifiedVideo == 1 ? (
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/658070920?h=e4ef67f050"
                  width="100%"
                  height="550px"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/658070909?h=5308b0e9ee"
                  width="100%"
                  height="550px"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          )
        }
      />
      <Slider {...settings} className="responsive-slick">
        {imgContainer.map((data, index) => (
          <InhalatedImgContainer key={index}>
            <InhalteImg src={data.img} alt={data.img} />
            <div className="overlay"></div>
            <div className="inner-overlay">
              <div className="inner-overlay-content">
                <img
                  onClick={() => OpenModalHandler(data.index)}
                  src={playButton}
                  alt="playButton"
                />
                <div>
                  <h3>Inhalate</h3>
                  <p>
                    Curabitur cursus sagittis varius. Quisque aliquet luctus
                    elit, in hendrerit orci malesuada eu.
                  </p>
                </div>
                <h2>$450</h2>
                <QuickShopBtn style={{ backgroundColor: "transparent" }}>
                  Quick Shop
                </QuickShopBtn>
              </div>
            </div>
          </InhalatedImgContainer>
        ))}
      </Slider>
    </div>
  );
};

export default InhalateSlick;
