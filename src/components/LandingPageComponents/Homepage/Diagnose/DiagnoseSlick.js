import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diagnose1 from '../../../../assets/landingImages/diagnose_new1.jpg'
import diagnose2 from '../../../../assets/landingImages/diagnose_new2.jpg'
import spain_flag from '../../../../assets/landingImages/spain_flag.png'
import us_flag from '../../../../assets/landingImages/us_flag.png'
import { Container } from 'react-bootstrap';
import { DiagnoseAppointmentBtn, DiagnoseImg, DiagnoseImgContainer, StyledSlickContainer } from './StyledDiagnose';
import { AddToCartBtn, ShopBtnTransparent } from '../../Globals/Globals';
import ReactCountryFlag from "react-country-flag"
const DiagnoseSlick = () => {
    const diagnoseImgs = [
        {
            coverImage: diagnose2,
            flagImage: <ReactCountryFlag countryCode="ES" svg style={{ width: '3.5em', height: '3.5em', display: "block" }} />
        },
        {
            coverImage: diagnose1,
            flagImage: <ReactCountryFlag countryCode="US" svg style={{ width: '3.5em', height: '3.5em', display: "block" }} />
        },
        {
            coverImage: diagnose2,
            flagImage: <ReactCountryFlag countryCode="ES" svg style={{ width: '3.5em', height: '3.5em', display: "block" }} />
        },
        {
            coverImage: diagnose1,
            flagImage: <ReactCountryFlag countryCode="US" svg style={{ width: '3.5em', height: '3.5em', display: "block" }} />
        },]
    var settings = {
        arrows: true,
        dots: false,

        autoplay: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <StyledSlickContainer>
            <div className='bscontainer-fluid'>
                <Slider {...settings} className='responsive-slick'>
                    {
                        diagnoseImgs.map((img, index) => (
                            <>
                                <DiagnoseImgContainer key={index}>
                                    <DiagnoseImg src={img.coverImage} alt={img} />
                                    <div className="overlay">
                                    </div>
                                    <div className='inner-overlay'>
                                        <h3>About</h3>
                                        <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  </p>
                                        <p className="price">$450</p>
                                        <ShopBtnTransparent>Appointment</ShopBtnTransparent>
                                    </div>

                                </DiagnoseImgContainer>
                                <div className='w-10'>
                                {img.flagImage}

                                </div>
                            </>

                        ))
                    }
                </Slider>
                {/* <h4>HEALTH DATA GOVERNANCE PROTECTION, ACCOUNTABILITY AND COMPLIANCE</h4>
                <p>HIPPAA, GDPR, CCPA, PIPEDA PHI, PIPEDA, LGPD, POPI and The Privacy Act's AUS 1988, UK 2018, NZ 2020 COMPLIANT</p>
                <DiagnoseAppointmentBtn>Appointment</DiagnoseAppointmentBtn> */}
            </div>
        </StyledSlickContainer>
    )
}

export default DiagnoseSlick