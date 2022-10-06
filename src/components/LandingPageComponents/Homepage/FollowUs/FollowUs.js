import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FollowUsImg, FollowUsImgContainer, FollowUsMain, MainContainerFollowUs } from './StyledFollowUs';
import { Col, Container, Row } from 'react-bootstrap';


const FollowUs = ({ imgs, head, imgs1, head1 }) => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MainContainerFollowUs>
     <Container>
        <Row>
          <Col lg={6}>
            <FollowUsMain>
              <h3>{head}</h3>
              <Slider {...settings} className='trusted-suppliers-slick'>
                {imgs.map((supplierImg, index) => {
                  const { img, title } = supplierImg;
                  return (
                    <FollowUsImgContainer key={index}>

                      <FollowUsImg src={img} alt={img} />
                      <p>{title}</p>
                    </FollowUsImgContainer>
                  )
                }
                )
                }
              </Slider>
            </FollowUsMain>
          </Col>
          <Col lg={6}>
            <FollowUsMain>
              <h3>{head1}</h3>
              <Slider {...settings} className='trusted-suppliers-slick'>
                {imgs1.map((supplierImg, index) => 
                {
                  const { img, title } = supplierImg;

                 return (
                    <FollowUsImgContainer key={index}>
  
                      <FollowUsImg src={img} alt={img} />
                      <p>{title}</p>
  
                    </FollowUsImgContainer>
                  )

                }
                )
                }
              </Slider>
            </FollowUsMain>
          </Col>
        </Row>
      </Container>
    </MainContainerFollowUs>
  )
}

export default FollowUs









// import React from 'react'
// import { FollowUsImg, FollowUsMain } from './StyledFollowUs'
// import hgie1 from '../../../assets/hygie1.svg'
// const FollowUs = () => {
//   return (
//     <FollowUsMain>
//       <FollowUsImg src={hgie1} alt={hgie1}/>
//       <p>Europe</p>
//     </FollowUsMain>
//   )
// }

// export default FollowUs