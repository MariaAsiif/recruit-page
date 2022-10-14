import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SSLImg, SSLImg1, SSLMain } from './StyledSSL'
import appleDown from '../../../../assets/landingImages/downloadFrom.svg'
import androidDown from '../../../../assets/landingImages/downloadFrom1.svg'
import ssl1 from '../../../../assets/landingImages/ssl1.svg'
import ssl2 from '../../../../assets/landingImages/ssl2.svg'
import ssl3 from '../../../../assets/landingImages/ssl3.svg'
import ssl4 from '../../../../assets/landingImages/ssl4.svg'
import ssl5 from '../../../../assets/landingImages/ssl5.svg'
import ssl6 from '../../../../assets/landingImages/ssl6.svg'
import Slider from 'react-slick'

const SSL = () => {

    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
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
    const downAppImgs = [appleDown, androidDown]
    const sslImgs = [ssl1, ssl2, ssl3, ssl4, ssl5, ssl6]
    return (
        <SSLMain>
            <div className='bscontainer-fluid'>
                <Row className='justify-between'>
                    <Col md={4}>
                        <Row>
                            {
                                downAppImgs.map((img, index) => (
                                    <Col key={index} xs={6}>
                                        <SSLImg src={img} alt={img} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={6}>
                    <Slider {...settings} className='ssl-slick '>
                {sslImgs.map((img, index) => {
                
                  return (
                   
                      <SSLImg key={index} src={img} alt={img} />
                     
                   
                  )

                }
                )
                }
              </Slider>
                        {/* <Row>
                            {
                                sslImgs.map((img, index) => (
                                    <Col md={2} sm={4}>
                                        <SSLImg src={img} alt={img} />
                                    </Col>
                                ))
                            }
                        </Row> */}
                    </Col>
                </Row>
            </div>
        </SSLMain>
    )
}

export default SSL