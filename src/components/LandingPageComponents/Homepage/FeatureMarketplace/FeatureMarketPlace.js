import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FeatureHeading,MarketPlaceHeading, FeatureMarketPlaceBtn, FeatureMarketSub, FeatureMarketText, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'
import { PrimaryHeading } from '../../Globals/Globals'
import FeatureMarketContainer from './FeatureMarketContainer'

const FeatureMarketPlace = () => {
    return (
        <>
            <Container>
                <FeatureMarketText>
                    <MarketPlaceHeading style={{color:'#242424'}}>FEATURED MARKETPLACE PRODUCTS</MarketPlaceHeading>
                    <FeatureMarketSub>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</FeatureMarketSub>
                </FeatureMarketText>
            </Container>
                <FeatureMarketContainer/>
        </>

    )
}

export default FeatureMarketPlace