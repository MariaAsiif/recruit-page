import styled from "styled-components";
import featureMarkBack from '../../../assets/landingImages/featureMarketBack.png'
// import { PrimaryHeading, TertiaryHeadingMedium, TertiaryHeadSecondary, ViewMoreBtn } from "";


export const FeatureMarketText = styled.div`
text-align: center;
margin-top: 9rem;

`

export const MarketPlaceHeading = styled.div`
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

@media screen and (min-width:786px) and (max-width:992px) {
  font-size: 2rem;
line-height: 2rem;

}

`


export const FeatureMarkMain = styled.div`
/* margin-top: 4.5rem; */
text-align: center;
color: #FFFFFF;
background-color:#24D29F ;
// background: transparent linear-gradient(240deg, #224A3E 0%, #24D29F 100%) 0% 0% no-repeat padding-box;
 opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  padding:30px 20px;
  border-radius:10px;
  margin:30px 40px;
.banner-swipper{
  .swiper-pagination-bullets.swiper-pagination-horizontal{
    display:flex;
    justify-content:start;
  
    
  }

  .swiper-pagination-bullet-active{
    background-color:#24D29F !important;
  }
}


`
export const FeatureMarkImg = styled.img`
@media screen and (max-width:480px) {
margin-top: 1.5rem;
width:200px;
  
}
`
export const FeatureSubHeading = styled.div`
opacity: 0.8;
font-size:14px;
line-height:30px;
`
export const FeatureHeading = styled.div`
font-weight:600;
padding-top:30px;
font-size:25px;
color:white ;
`
export const FeatureMarketPlaceBtn = styled.div`

margin-top: 1rem;
color: #FFFFFF;
font-size:16px;
width:30%;
text-align:center;
padding:10px;
border-radius:10px;
background: #224A3E;
cursor:pointer;

&:hover{
   background-color:red
}

@media screen and (max-width:600px) {
  width:50%;
}

`
export const FeatureMarkTextContainer = styled.div`
text-align: start ;
`
export const FeatureMarketSub = styled.div`
padding: 2rem;
padding-top: 1rem;
font-size:1.2rem;
`