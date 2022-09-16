import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import aboveCopyright1 from "../../images/aboveCopyright1.svg";
import aboveCopyright2 from "../../images/aboveCopyright2.svg";
import aboveCopyright3 from "../../images/aboveCopyright3.svg";
import aboveCopyright4 from "../../images/aboveCopyright4.svg";
import aboveCopyright5 from "../../images/aboveCopyright5.svg";
import aboveCopyright6 from "../../images/aboveCopyright6.svg";
import aboveCopyright7 from "../../images/aboveCopyright7.svg";
import aboveCopyright8 from "../../images/aboveCopyright8.svg";

const CompanyLogo = () => {


    const aboveCopyrightImgs = [
        aboveCopyright1,
        aboveCopyright2,
        aboveCopyright3,
        aboveCopyright6,
        aboveCopyright4,
        aboveCopyright5,
        aboveCopyright7,
        aboveCopyright8,
    ];



    var settings = {
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
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

    return (
        <div className='bg-[#FBFAFA] '>
            <div className='bscontainer p-5 mt-5'>
                <Slider {...settings} >
                    {aboveCopyrightImgs.map((supplierImg, index) => (
                        <div key={index}>
                            <img src={supplierImg} className=" p-[2rem] h-[7rem] object-fill  " alt="images" />
                        </div>
                    ))}
                </Slider>

                
            </div >
        </div >
    )
}

export default CompanyLogo