import React,{useState} from 'react';
// import Slider from 'react-slick';
// import { ViewTodayStyle } from '../ViewedToday/StyleViewToday';
import { BroswerSlick, BrowserHistoryImg, BrowserHistoryImgContainer, BrowserHistoryMain } from './StyledBrowserHistory';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';
function BrowserHistory({ imgs }) {
  const [getSwiper,setGetSwiper]=useState(0)


  var settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
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
  return (
    <Container>
      <BrowserHistoryMain>
       
        <BroswerSlick>
          
          <div className='container'>
                <div className='main-heading'>Browsing History</div>
                <Slider {...settings} className='viewToday-slick mt-3'>
                {
                    imgs.map((img, index) => (
                       
                            <div key={index} className='d-flex justify-content-center'>
                              <BrowserHistoryImgContainer >
                                <BrowserHistoryImg src={img} alt='Everything today' />
                              </BrowserHistoryImgContainer>
                            </div>
                        
                    ))
                }
                 </Slider>
                </div>
        </BroswerSlick>
      </BrowserHistoryMain>
    </Container>
  );
}

export default BrowserHistory;
