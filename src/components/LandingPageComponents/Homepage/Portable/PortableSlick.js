import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row } from 'react-bootstrap'
import portables1 from '../../../../assets/landingImages/portables1.jpg'
import portables2 from '../../../../assets/landingImages/portables2.jpg'
import { PortableSlickMain } from './PortableStyles';
import PortableCard from './PortableCard';
import PortableCard2 from './PortableCard2';


const PortableSlick = () => {

  var settings = {
    arrows: true,
    dots: false,
   
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <PortableSlickMain>
      <Slider {...settings} className='portable-slick'>
        <div>
          <Row className='d-flex p-0'>
            <PortableCard className='img-fluid  p-0' img={portables1} />
            <PortableCard2 className='img-fluid  p-0' img={portables2} />
          </Row>
        </div>
        <div>
          <Row className='d-flex align-items-center  p-0'>
            <PortableCard className='img-fluid  p-0' img={portables1} />
            <PortableCard2 className='img-fluid ' img={portables2} />
          </Row>
        </div>

      </Slider>
    </PortableSlickMain>
  )
}

export default PortableSlick