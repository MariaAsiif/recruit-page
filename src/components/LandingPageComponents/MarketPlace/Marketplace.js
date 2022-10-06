import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MarketplaceImg, MarketSubHead, MarketContentContainer, MarketReHeading, MarketTertiaryHeadMedium, MarketViewMoreBtn, MarkInnerContainer } from './StyledMarketPlace'
import marketplace from '../../../assets/landingImages/marketplace.svg'
import { PrimaryHeading, TertiaryHeadingSmall } from '../Globals/Globals'
import { MarketPlaceSlick } from './MarketPlaceSlick'
const Marketplace = ({id}) => {
  return (
    <div id={id}>
    <Container  >
        <MarkInnerContainer  >
    <Row>
        <Col md={6}>
            <MarketContentContainer>
            <PrimaryHeading>MARKETPLACE</PrimaryHeading>
            <TertiaryHeadingSmall>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</TertiaryHeadingSmall>
            <MarketSubHead>HEALTH IS WEALTH</MarketSubHead>
            <MarketReHeading >“Great health is a great wealth!”</MarketReHeading>
            <MarketTertiaryHeadMedium>Dr A. E De Mandeville</MarketTertiaryHeadMedium>
            <MarketViewMoreBtn>View More</MarketViewMoreBtn>
            </MarketContentContainer>
        </Col>
        <Col md={6}>
            <MarketplaceImg className='img-fluid' src={marketplace} alt={marketplace}/>
        </Col>
    </Row>
    <div>
    <MarketPlaceSlick/>
    </div>
    </MarkInnerContainer>
      </Container>
    </div>
  )
}

export default Marketplace