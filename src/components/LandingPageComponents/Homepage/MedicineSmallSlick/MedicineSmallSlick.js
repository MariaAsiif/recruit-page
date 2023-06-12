import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medicSlide1 from '../../../../assets/landingImages/medicslide1.svg'
import medicSlide3 from '../../../../assets/landingImages/medicslide3.svg'
import medicSlide4 from '../../../../assets/landingImages/medicslide4.svg'
import medicSlide5 from '../../../../assets/landingImages/medicslide5.svg'
import medicSlide6 from '../../../../assets/landingImages/medicslide6.svg'

import { Container } from 'react-bootstrap';
import { MedicineSmallImg, MedicineSmallImgContainer, SmallMedicineContainerMain } from './StyledMedicineSmallSlick';


const MedicineSmallSlick = ({id}) => {
    const medicSlides = [medicSlide1, medicSlide3, medicSlide4, medicSlide5, medicSlide6,medicSlide1, medicSlide3, medicSlide4, medicSlide5, medicSlide6]

    var settings = {
        arrows: false,
        dots: false,
       
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                   
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SmallMedicineContainerMain id={id} >
            <Container>
                <Slider className='d-flex align-items-center' {...settings} >
                    {
                        medicSlides.map((smallMedicine, index) => <div>
                            <MedicineSmallImgContainer key={index}>
                                <MedicineSmallImg src={smallMedicine} alt={smallMedicine} />
                            </MedicineSmallImgContainer>
                        </div>)
                    }

                </Slider>
            </Container>

        </SmallMedicineContainerMain>
    )
}

export default MedicineSmallSlick