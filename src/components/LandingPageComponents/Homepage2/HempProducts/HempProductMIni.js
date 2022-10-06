import React from "react";
import { Card} from 'react-bootstrap';
import { StyleHemp } from "./StyleHempProduct";
import HempCardIcon from '../../../../assets/landingImages/HempCardIcon.svg';
import Slider from "react-slick";
function HempProductMIni({heading}) {
    const hempImgs = [HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon]
    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
const style={
    borderBottom:'1px solid #DADADA',
    paddingBottom:'1rem',
}
    return (
        <StyleHemp>
            <div className="container p-5" >
                <h1 style={style}>Last Month Top Categories </h1>
                <Slider {...settings} className='viewToday-slick mt-4'>
                    {hempImgs.map((img, index) => (
                        <div key={index}>
                            <Card  className="cards">
                                <div className="text-center card-body">
                                    <img src={HempCardIcon} className="IconImage" alt="Iconimage" />
                                    <h2>Categories 1</h2>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </StyleHemp>);
}

export default HempProductMIni;