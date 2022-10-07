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
                <div className="text-[2rem] font-medium">MARKETPLACE</div>
                <div className="text-[18px]">Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</div>
                <MarketSubHead>HEALTH IS WEALTH</MarketSubHead>
                <MarketReHeading >“Great health is a great wealth!”</MarketReHeading>
                <div className='text-[15px] text-gray-400 text-right'>Dr A. E De Mandeville</div>
                <div className='flex justify-end'>
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