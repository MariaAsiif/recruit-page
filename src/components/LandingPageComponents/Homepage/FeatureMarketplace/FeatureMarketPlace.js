import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import { MarketPlaceHeading, FeatureMarketSub, FeatureMarketText, } from './StyledFeatureMark'
// import { PrimaryHeading } from '../../Globals/Globals'
import FeatureMarketContainer from './FeatureMarketContainer'

const FeatureMarketPlace = () => {
    return (
        <>
            <FeatureMarketText>
                {/* <div className="accordion-item lg:w-[99%] md:w-[98%]  mx-1  mb-[30px] bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        lg:grid
        md:grid
        w-full
        py-4
        px-4
        text-base text-gray-800 
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" style={{ justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <MarketPlaceHeading style={{ color: '#242424' }}>FEATURED MARKETPLACE PRODUCTS</MarketPlaceHeading>

                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <FeatureMarketSub>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</FeatureMarketSub>

                        </div>
                    </div>
                </div> */}

                <div className="accordion-item ml-[30px] mb-[30px] mr-[30px] bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        lg:grid
        md:grid
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
      " type="button" data-bs-toggle="collapse" style={{ justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <h2 className='lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-medium text-black py-1'> FEATURED MARKETPLACE PRODUCTS</h2>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <FeatureMarketSub>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</FeatureMarketSub>

                        </div>
                    </div>
                </div>

            </FeatureMarketText>
            <FeatureMarketContainer />
        </>

    )
}

export default FeatureMarketPlace