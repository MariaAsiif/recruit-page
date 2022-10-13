import React from "react";
// import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
const Index = () => {
  return (

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <video
          autoPlay
          muted
          loop
          src="/Videos/hporx.mp4"
        /> 
      </SwiperSlide>
      <SwiperSlide>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          src="/Videos/heroSliderVideoTwo.mp4"
        /> 
      </SwiperSlide>

    </Swiper>
    // <Carousel>
    //   <Carousel.Item>
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       className="hero-video"
    //       src="/Videos/hporx.mp4"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="heroslider-videoOver" >
    //       <video
    //         autoPlay
    //         muted
    //         loop
    //         className="hero-video"
    //         src="/Videos/heroSliderVideoTwo.mp4"
    //       />
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default Index;
