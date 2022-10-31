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
font-size: 3rem;
// line-height: 7.2rem;
opacity: 0.8;
color: #FFFFFF;
@media screen and (max-width:600px) {
  font-size: 1rem;
line-height: 2rem;
}

@media screen and (max-width:1200px)and (min-width: 768px) {
  font-size:2rem;
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
  padding: 1rem 0;
`
export const FeatureMarkImg = styled.img`
@media screen and (max-width:480px) {
margin-top: 1.5rem;
  
}
`
export const FeatureSubHeading = styled(TertiaryHeadingMedium)`
opacity: 0.8;
font-size:16px;
line-height:30px;
`
export const FeatureHeading = styled(PrimaryHeading)`
text-transform: capitalize;
padding-bottom:10px;
font-size:40px;
color:white ;
@media screen and (max-width:600px) {
  font-size: 1.5rem;
  padding:0px;
}

`
export const FeatureMarketPlaceBtn = styled(ViewMoreBtn)`

margin-top: 1rem;
color: #FFFFFF;
font-size:16px;
border: 1px solid #FFFFFF;
background: transparent;
`
export const FeatureMarkTextContainer = styled.div`
// padding:30px;
margin-left:4rem;
text-align: start ;
@media screen and (max-width:992px) {

  margin-bottom:1rem;
  
  }
`
export const FeatureMarketSub = styled(TertiaryHeadSecondary)`
padding: 2rem;
padding-top: 1rem;
font-size:1.2rem;
`