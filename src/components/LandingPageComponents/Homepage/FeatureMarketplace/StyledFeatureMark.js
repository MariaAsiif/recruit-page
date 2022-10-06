import styled from "styled-components";
import featureMarkBack from '../../../../assets/landingImages/featureMarketBack.png'
import { PrimaryHeading, TertiaryHeadingMedium, TertiaryHeadSecondary, ViewMoreBtn } from "../../Globals/Globals";


export const FeatureMarketText=styled.div`
text-align: center;
margin-top: 9rem;
`

export const MarketPlaceHeading = styled(PrimaryHeading)`
color: #242424;
font-weight: 500;
font-size: 4.8rem;
line-height: 7.2rem;
opacity: 0.8;
color: #FFFFFF;
@media screen and (max-width:480px) {
  font-size: 3.6rem;
line-height: 4rem;
}
`


export const FeatureMarkMain = styled.div`
/* margin-top: 4.5rem; */
text-align: center;
color: #FFFFFF;
background-image: url(${featureMarkBack}) ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 4rem 0;
`
export const FeatureMarkImg = styled.img`
@media screen and (max-width:480px) {
margin-top: 1.5rem;
  
}
`
export const FeatureSubHeading = styled(TertiaryHeadingMedium)`
opacity: 0.8;
`
export const FeatureHeading = styled(PrimaryHeading)`
text-transform: capitalize;
color:white ;
`
export const FeatureMarketPlaceBtn = styled(ViewMoreBtn)`

margin-top: 5rem;
color: #FFFFFF;
border: 1px solid #FFFFFF;
background: transparent;
`
export const FeatureMarkTextContainer = styled.div`
margin-left:4rem;
text-align: start ;
`
export const FeatureMarketSub = styled(TertiaryHeadSecondary)`
padding: 2rem;
padding-top: 1rem;
`