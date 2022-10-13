import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VaporizeMainContainer } from './StyledVaporize'
// import { Container } from 'react-bootstrap';
import VaporizeSlickCard from './VaporizeSlickCard';


const Vaporize = ({id}) => {

    var settings = {
        arrows: true,
        dots: false,
       
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <VaporizeMainContainer>
            <div className='bscontainer-fluid' id={id} >
                <div className="vaporize-inner-container">
                    <Slider {...settings} className='responsive-slick'>
                        <VaporizeSlickCard />
                        <VaporizeSlickCard />
                    </Slider>
                </div>
            </div>
        </VaporizeMainContainer>
    )
}

export default Vaporize