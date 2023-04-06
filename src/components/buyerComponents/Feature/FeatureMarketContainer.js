import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import featureMark from '../../../images/lapiiii.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";

import { FeatureHeading, FeatureMarketPlaceBtn, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'

const FeatureMarketContainer = ({ order }) => {
    return (

        <div >
            <FeatureMarkMain>
                <div className=''>
                    <Swiper
                        cssMode={true}
                        // navigation={true}
                        pagination={true}
                        mousewheel={true}
                        autoplay={true}
                        keyboard={true}
                        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
                        className="banner-swipper"
                    >
                        <SwiperSlide>
                            <div className='flex justify-between '>
                                <FeatureMarkTextContainer>
                                    <FeatureHeading>Conversion Rate Optimization: Convert Visitors Into Buyers</FeatureHeading>
                                    <FeatureSubHeading>Learn how to monetize your online presence with this course.</FeatureSubHeading>
                                </FeatureMarkTextContainer>
                                <img src={featureMark} alt={featureMark} className='w-[30%] object-cover' />

                            </div>



                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-between '>
                                <FeatureMarkTextContainer>
                                    <FeatureHeading>Conversion Rate Optimization: Convert Visitors Into Buyers</FeatureHeading>
                                    <FeatureSubHeading>Learn how to monetize your online presence with this course.</FeatureSubHeading>
                                </FeatureMarkTextContainer>
                                <img src={featureMark} alt={featureMark} className='w-[30%] object-cover' />


                            </div>



                        </SwiperSlide>
                    </Swiper>
                </div>
            </FeatureMarkMain>
        </div>
    )
}

export default FeatureMarketContainer