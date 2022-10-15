import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MarketplaceImg, MarketSubHead, MarketContentContainer, MarketReHeading, MarketTertiaryHeadMedium, MarketViewMoreBtn, MarkInnerContainer } from './StyledMarketPlace'
import marketplace from '../../../assets/landingImages/marketplace.svg'
import { PrimaryHeading, TertiaryHeadingSmall } from '../Globals/Globals'
import { MarketPlaceSlick } from './MarketPlaceSlick'
const Marketplace = ({ id }) => {
  return (
    <div id={id}>
      <div className='bscontainer-fluid'>
        <MarkInnerContainer  >
          <div className='row'>

            <div className='col-lg-6'>
              <MarketplaceImg className='img-fluid' src={marketplace} alt={marketplace} />
            </div>

            <div className='col-lg-6'>
              <MarketContentContainer>

                <div class="accordion-item bg-white border mt-3 lg:mt-0 lg:w-full  border-gray-200">
                  <h2 class="accordion-header mb-0" id="headingTwo">
                    <button class="
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
                      <div className="lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-medium">MARKETPLACE</div>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body py-4 px-5">
                      <div className="text-[18px]">Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</div>
                    </div>
                  </div>
                </div>



                <MarketSubHead>HEALTH IS WEALTH</MarketSubHead>
                <MarketReHeading >“Great health is a great wealth!”</MarketReHeading>
                <div className='text-[15px] text-gray-400 text-center'>Dr A. E De Mandeville</div>
                <div className='flex justify-center'>
                  <MarketViewMoreBtn>View More</MarketViewMoreBtn>
                </div>
              </MarketContentContainer>
            </div>
            <div >
              <MarketPlaceSlick />
            </div>
          </div>

        </MarkInnerContainer>
      </div >
    </div>
  )
}

export default Marketplace