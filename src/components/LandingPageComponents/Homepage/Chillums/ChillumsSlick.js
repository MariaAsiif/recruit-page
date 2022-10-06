import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chillum1 from '../../../../assets/landingImages/chillum1.png'
import chillum2 from '../../../../assets/landingImages/chillum2.jpg'
import chillum3 from '../../../../assets/landingImages/chillum4.jpg'
import ChillumCard from './ChillumCard';
import { ChillumSlick } from './StyledChillums';
// import ImageZoom from '../ImageZoom/ImageZoom';

const ChillumsSlick = () => {

  



  var settings = {
    dots: false,
    arrows: true,

    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  return (
    < ChillumSlick >
  
      <Slider {...settings} className='responsive-slick'>
        <ChillumCard img={chillum1}  />
        <ChillumCard img={chillum2} />
        <ChillumCard img={chillum3} />
        <ChillumCard img={chillum1} />
        <ChillumCard img={chillum2} />
        <ChillumCard img={chillum3} />
      </Slider>
    </ChillumSlick >


  )
}

export default ChillumsSlick