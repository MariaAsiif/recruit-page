import React from "react";
import { Carousel } from "react-bootstrap";

const Index = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          src="/Videos/hporx.mp4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroslider-videoOver" >
          <video
            autoPlay
            muted
            loop
            className="hero-video"
            src="/Videos/heroSliderVideoTwo.mp4"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Index;
