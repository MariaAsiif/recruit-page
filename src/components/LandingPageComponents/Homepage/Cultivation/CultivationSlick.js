import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cultivation1 from '../../../../assets/landingImages/cultivation1.jpg'
import cultivation2 from '../../../../assets/landingImages/cultivation2.jpg'
import cultivation3 from '../../../../assets/landingImages/cultivation3.jpg'
import CultivationCard from './CultivationCard';
import { Container } from 'react-bootstrap';


const CultivationSlick = () => {

    const cultivationBox = [
        {
            img: cultivation1,
            heading: 'Seedo Automaed Home Grow Device ',
            description: '$2,400 + Approx $35 shipping'
        },
        {
            img: cultivation2,
            heading: 'Mary Ag',
            description: 'Price and shipping on request'

        }, {
            img: cultivation3,
            heading: 'LEAF',
            description: 'Price and shipping on request'
        }, {
            img: cultivation1,
            heading: 'Seedo Automaed Home Grow Device ',
            description: '$2,400 + Approx $35 shipping'
        },
        {
            img: cultivation2,
            heading: 'Mary Ag',
            description: 'Price and shipping on request'

        }, {
            img: cultivation3,
            heading: 'LEAF',
            description: 'Price and shipping on request'
        }]

    var settings = {
        arrows: true,
        dots: false,

        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

        <div className='bscontainer-fluid' >
            <Slider {...settings} className='responsive-slick'>
                {
                    cultivationBox.map((cultivationSection, index) => {
                        const { heading, description, img } = cultivationSection;
                        return (
                            <div key={index}>
                                <CultivationCard img={img} heading={heading} description={description} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div >

    )
}

export default CultivationSlick