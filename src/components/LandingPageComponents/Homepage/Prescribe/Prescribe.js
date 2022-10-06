import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap'
import prescribe from '../../../../assets/landingImages/prescribe3.jpg'
import prescribe01 from '../../../../assets/landingImages/prescribe5.jpg'
import prescribe1 from '../../../../assets/landingImages/prescribe1.jpg'
import prescribe2 from '../../../../assets/landingImages/prescribe2.jpg'
import prescribe3 from '../../../../assets/landingImages/prescribe3.jpg'
import { PrimaryHeading, TertiaryHeadingMedium, ViewMoreBtn } from '../../Globals/Globals'
import { ConsultDarkBtn, PrescribeSlickMain, PrescribeMainContainer } from './StyledPrescribe';
import PrescribeCard from './PrescribeCard';
import { PrescribeBtn, PrescribeImg, PrescribeImgContainer , ShopBtn} from './StyledPrescribe';

const Prescribe = ({ id }) => {

    const prescribeImgs1 = [prescribe, prescribe01];
    const prescribeImgs2 = [prescribe1, prescribe2, prescribe3, prescribe1, prescribe2, prescribe3, prescribe1, prescribe2, prescribe3];
    var settings = {
        dots: false,
        arrows: false,
       
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
                    slidesToScroll: 1,
                   
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <PrescribeMainContainer id={id} >
            <PrescribeSlickMain>
                <Container>
                    <Slider {...settings} className='responsive-slick'>
                        <PrescribeImgContainer className='card-overlay'>
                            <div className="overlay">
                            </div>
                            <div className='inner-overlay'>
                                <h3>About</h3>
                                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet.</p>
                                <PrescribeBtn>Appointment</PrescribeBtn>
                            </div>
                            <PrescribeImg src={prescribe} alt={prescribe} />
                        </PrescribeImgContainer >
                        <PrescribeImgContainer className='card-overlay'>
                            <div className="overlay">
                            </div>
                            <div className='inner-overlay'>
                                <h3>About</h3>
                                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet.</p>
                                <PrescribeBtn>Appointment</PrescribeBtn>
                            </div>
                            <PrescribeImg src={prescribe1 } alt={prescribe1} />
                        </PrescribeImgContainer >
                        {/* {
                            prescribeImgs1.map((img, index) => (
                                <PrescribeCard key={index} img={img} />
                            ))
                        } */}
                        <div className='text-container'>
                            <PrimaryHeading>Prescribe</PrimaryHeading>
                            <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet.</p>
                            <div className='prescribe-btns'>
                                <ConsultDarkBtn >CONSULTATION</ConsultDarkBtn>
                                <ViewMoreBtn className='prescribe-btn2'>View more</ViewMoreBtn>
                            </div>
                        </div>
                    </Slider>

                    <div className='mt-4'>
                        <Slider {...settings} className='responsive-slick'>
                            {
                                prescribeImgs2.map((img, index) => (
                                    <PrescribeCard key={index} img={img} />
                                ))
                            }
                        </Slider>
                    </div>
                </Container>
            </PrescribeSlickMain>
        </PrescribeMainContainer>
    )
}

export default Prescribe