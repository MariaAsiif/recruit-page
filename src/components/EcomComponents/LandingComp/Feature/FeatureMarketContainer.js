import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import featureMark from '../../../../assets/landingImages/featureMarketplace.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay,  Pagination, Mousewheel, Keyboard } from "swiper";

import { FeatureHeading, FeatureMarketPlaceBtn, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'

const FeatureMarketContainer = ({ order }) => {
    return (

        <div >
            <FeatureMarkMain>
                <div className='p-0 bscontainer'>
                    <Swiper
                        cssMode={true}
                        // navigation={true}
                        pagination={true}
                        mousewheel={true}
                        autoplay={true}
                        keyboard={true}
                        modules={[Autoplay , Pagination, Mousewheel, Keyboard]}
                        className="banner-swipper"
                    >
                        <SwiperSlide>
                            <Row className="pb-[4rem]">
                                <Col lg={6} className={order === 'first' ? 'order-0' : 'order-1'}>
                                    <FeatureMarkImg src={featureMark} alt={featureMark} />
                                </Col>
                                <Col lg={6} className={order === 'second' ? 'order-1' : 'order-0'}>
                                    <FeatureMarkTextContainer>
                                        <FeatureHeading>Marketplace Vendors</FeatureHeading>
                                        <FeatureSubHeading>All products featured are available from selected marketplace vendors, please search or select the product category you require</FeatureSubHeading>
                                        <FeatureMarketPlaceBtn>Start Buying</FeatureMarketPlaceBtn>
                                    </FeatureMarkTextContainer>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="pb-8">
                                <Col lg={6} className={order === 'first' ? 'order-0' : 'order-1'}>
                                    <FeatureMarkImg src={featureMark} alt={featureMark} />
                                </Col>
                                <Col lg={6} className={order === 'second' ? 'order-1' : 'order-0'}>
                                    <FeatureMarkTextContainer>
                                        <FeatureHeading>Marketplace </FeatureHeading>
                                        <FeatureSubHeading>All products featured are available from selected marketplace vendors, please search or select the product category you require</FeatureSubHeading>
                                        <FeatureMarketPlaceBtn>Start Buying</FeatureMarketPlaceBtn>
                                    </FeatureMarkTextContainer>
                                </Col>
                            </Row>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </FeatureMarkMain>
        </div>
    )
}

export default FeatureMarketContainer