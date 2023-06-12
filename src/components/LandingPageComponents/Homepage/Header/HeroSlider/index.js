import React from "react";
// import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const Index = () => {
  return (
    <>
      <div className="border relative">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper z-40 video-slider">
          <SwiperSlide>
            <video
              autoPlay
              muted
              loop
              className="hero-video"
              src="/Videos/ForestFire.mp4"
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
      </div>
      <div className="absolute slider_overly bg-black opacity-[0.5] lg:h-[100vh] 2xl:h-[100vh] h-full m-auto  z-40 left-0 top-[1px] right-0 ">
        </div>
    </>

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
