import styled from "styled-components";
import { SubHeading, SubHeadingSecondary, TertiaryHeadingMedium, ViewMoreBtn } from "../Globals/Globals";


export const MarketPlaceMain = styled.div`

`
export const MarkInnerContainer = styled.div`
 position: relative;

`
export const MarketSlickContainer = styled.div`
  @media screen and (min-width:1140px) {
    .inhalate-slick .slick-prev {
    left:-7px !important ;
    }
    .inhalate-slick .slick-next {
      right: 4rem !important;
      
  }
  }
  @media screen and (min-width:1024px) and (max-width:1130px) {
    .inhalate-slick .slick-prev {
    left:12px !important ;
    }
    .inhalate-slick .slick-next {
      right: 52px !important;
      z-index: 1;
  }
  }
@media screen and (min-width:768px) and (max-width:1022px) {
  .inhalate-slick .slick-prev {
  left:13px !important ;
  }
  .inhalate-slick .slick-next {
    right: 40px !important;
    z-index: 1;
}
}
@media screen and (min-width:425px) and (max-width:767px) {
  .inhalate-slick .slick-prev {
  left:-3px !important ;

  }
  .inhalate-slick .slick-next {
    right: 22px !important;
    z-index: 1;
}
}
@media screen and (min-width:320px) and (max-width:600px) {
  .inhalate-slick .slick-prev {
  left:-4px !important ;
  }
  .inhalate-slick .slick-next {
    right: 50px !important;
    z-index: 1;
}

position: absolute;
top: 0rem;
right: 0;
}

@media screen and (min-width:768px) and (max-width:992px) {
 
position: absolute;
top: 20%;
width: 98% !important;
right: 0;
}

 width: 80%;
 position: absolute;
 top: 5rem;
 right: 0;
 outline: none;
 border: none;
 .marketplace-slick{
.slick-list {
  margin: 0 2.5rem;
  
}
 }
 
 @media screen and (max-width:1250px) {
 width: 100%;
 display: inline-block;
    text-align: -webkit-center;
 }
 @media screen and (max-width:1200px)and (min-width: 768px) {
  width: 54rem;
 }
 @media screen and (max-width:450px) {
width: 100%;
display: inline-block;

 }

 .dr_item{
    @media screen and (max-width:1200px)and (min-width: 768px) {
     margin-left:6rem
  }
 }



`

export const MarketplaceImg = styled.img`
    width:100%;
`
export const MarketSubHead = styled(SubHeading)`
margin-top: 2rem;
text-align:center;
font-size: 2rem;

`
export const MarketSubHeadSecond = styled(SubHeadingSecondary)`
margin-top: 1rem;
color: #E84025;
opacity: 0.8;
`
export const MarketContentContainer = styled.div`
text-aign:cener;

  @media screen and (max-width : 775px)   {
    padding-bottom: 3rem;
    text-aign:cener;
  }
`
export const MarketReHeading = styled(MarketSubHeadSecond)`
  color: red;
  font-size:25px;
  font-style: italic;
  text-align:center;
 
`
export const MarketTertiaryHeadMedium = styled(TertiaryHeadingMedium)`
color: #828282;
opacity: 0.8;
margin-top: 0.9rem;
`
export const MarketViewMoreBtn = styled(ViewMoreBtn)`
margin-top: 2rem;




`
export const MarkSlickImgContainer = styled.div`
position: relative;
  text-align: center;
width:50%;
  .inner-overlay {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;  
}
`
export const MarkSlickImg = styled.img`
border-radius:1rem ;
width: 20rem;
height:15rem;
@media screen and (min-width:320px) {
  // height:23rem;
  display:inherit !important ;
}

`