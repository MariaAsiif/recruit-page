import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import { consultationPack, elevatePack, enhancePack, escalatePack } from './CardsData'
import PackageCard from './PackageCard'
import { PackagesCardMain } from './StyledOurPackages'


const OurPackages = () => {
    var settings = {
        dots: false,
        arrows: true,
        //
        // autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1410,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                   
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };
    return (
        <Container>
            <PackagesCardMain>
                <div className='text-center'>
                    <h3 className='main-heading'>Our Packages</h3>
                </div>
                <Slider {...settings} className='chillum-slick packages-slick'>
                    <PackageCard name='Enhance' price='$250' benefits={enhancePack} />
                    <PackageCard name='Elevate' price='$500' benefits={elevatePack} />
                    <PackageCard name='Escalate' price='$1000' benefits={escalatePack} />
                    <PackageCard name='Consultation' price='Custom' benefits={consultationPack} />
                </Slider>
            </PackagesCardMain>
        </Container>
    )
}

export default OurPackages