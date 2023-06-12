import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import { FashionDiscountImg, FashionDiscountImgContainer, FashionDiscountMainContainer } from './StyledFashionDiscount';

const FashionDiscount = ({imgs}) => {
   
    var settings = {
        dots: false,
        arrows:false,
       
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
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
        <Container>
            <FashionDiscountMainContainer>
                <Slider {...settings} className='fashion-slick'>
                    {
                        imgs.map((img,index) => (
                            <FashionDiscountImgContainer key={index}>
                                <FashionDiscountImg src={img} alt={img} />
                            </FashionDiscountImgContainer>
                        ))
                    }
                </Slider>
            </FashionDiscountMainContainer>
        </Container>
    )
}

export default FashionDiscount