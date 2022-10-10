import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FeatureHeading, MarketPlaceHeading, FeatureMarketPlaceBtn, FeatureMarketSub, FeatureMarketText, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'
import { PrimaryHeading } from '../../Globals/Globals'
import FeatureMarketContainer from './FeatureMarketContainer'

const FeatureMarketPlace = () => {
    return (
        <>
            <Container>
                <FeatureMarketText>
                    <div class="accordion-item lg:w-[105%] w-full mb-[30px] bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingTwo">
                            <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-4
        text-base text-gray-800 
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" style={{ display: 'grid', justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <MarketPlaceHeading style={{ color: '#242424' }}>FEATURED MARKETPLACE PRODUCTS</MarketPlaceHeading>

                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body py-4 px-5">
                                <FeatureMarketSub>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</FeatureMarketSub>

                            </div>
                        </div>
                    </div>

                </FeatureMarketText>
            </Container>
            <FeatureMarketContainer />
        </>

    )
}

export default FeatureMarketPlace