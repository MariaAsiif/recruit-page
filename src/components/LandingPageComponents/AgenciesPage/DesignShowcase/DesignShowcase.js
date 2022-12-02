import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import StyleDesignShowcase, { StyleDesignInner } from './StyleDesignShowcase';
import SwiperCore,{EffectCoverflow,Pagination,Navigation,Keyboard,Mousewheel} from 'swiper/core';


import banner1 from '../../../../assets/landingImages/faqPlusIcon.svgbanner1.jpg';
import banner2 from '../../../../assets/landingImages/faqPlusIcon.svgbanner2.jpg';
import banner3 from '../../../../assets/landingImages/faqPlusIcon.svgbanner3.jpg';
import banner4 from '../../../../assets/landingImages/faqPlusIcon.svgbanner4.jpg';
import banner5 from '../../../../assets/landingImages/faqPlusIcon.svgbanner5.jpg';
// import banner6 from '../../../assets/banner6.jpg';
// import banner2 from '../../../img/banner2.jpg';
// import banner7 from '../../../img/banner7.jpg';
// import banner4 from '../../../img/banner4.jpg';
// import banner5 from '../../../img/banner5.jpg';
// import banner6 from '../../../img/banner6.jpg';
// import banner8 from '../../../img/banner8.jpg';
// import banner9 from '../../../img/banner9.jpg';
// import banner10 from '../../../img/banner10.jpg';
// import banner11 from '../../../img/banner11.jpg';

SwiperCore.use([EffectCoverflow,Pagination,Navigation,Keyboard,Mousewheel]);

function DesignShowcase(){
    return (
    <StyleDesignShowcase>
        <h3>Designer Showcase</h3>
        <StyleDesignInner>
        <div className="container">
                <Swiper navigation={false} effect={"coverflow"}
                 centeredSlides={true}
                  slidesPerView={3}
                  loop={true}
                  coverflowEffect={{
                      rotate: 0,
                      stretch:0,
                      depth: 100,
                      modifier: 6,
                      slideShadows:true
                  }}
                  mousewheel= {true }
                  keyboard={true}
                  pagination={false}
                  slideToClickedSlide={true}
                  className="mySwiper"
                  breakpoints= {{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    //   spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    //   spaceBetween: 30
    },
    768:{
        slidesPerView:3
    },
    991:{
        slidesPerView:3
    }}}>
                   <SwiperSlide><img src={banner1}/></SwiperSlide>
                   <SwiperSlide><img src={banner2}/></SwiperSlide>
                   <SwiperSlide><img src={banner3}/></SwiperSlide>
                   <SwiperSlide><img src={banner4}/></SwiperSlide>
                   <SwiperSlide><img src={banner5}/></SwiperSlide>
                   <SwiperSlide><img src={banner1}/></SwiperSlide>
                   <SwiperSlide><img src={banner2}/></SwiperSlide>
                   <SwiperSlide><img src={banner3}/></SwiperSlide>
                   <SwiperSlide><img src={banner4}/></SwiperSlide>
                   <SwiperSlide><img src={banner5}/></SwiperSlide>
                  </Swiper>
            </div>
        </StyleDesignInner>
           
    </StyleDesignShowcase>);
}

export default DesignShowcase;