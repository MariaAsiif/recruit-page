import styled from "styled-components"
import GrowProfitBack from '../../../../assets/landingImages/growProfitBack.svg';
import { PrimaryHeading, SubHeading, ViewMoreBtn } from "../../Globals/Globals";

export const GrowProfitMainContainer = styled.div`

margin-top: 11.2rem;
p{
  margin-top: 1rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: 0em;
  color: white;

}
h5{
  margin-top: .7rem;
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
letter-spacing: 0em;
color: white;

}

@media only screen and (max-width: 600px) {
  .grow-profit-slick  .slick-next {
    left: 70% !important;
  }
 }

 @media only screen and (max-width: 992px) {
  .grow-profit-slick  .slick-next {
    right: 7% !important;
  }
 }


@media screen and (min-width:900px){
  .grow-profit-slick {
  margin-top: 3rem;
}
.grow-profit-slick  .slick-next {
  left: 44%;
  top:-15%;
  
  transform: translate(1rem,36rem);
  z-index: 1;

  &:before {
    font-size: 2rem !important;
    color: black;
}
}
.grow-profit-slick  .slick-prev {
  left: 47%;
  top:-15%;
  transform: translate(-7rem,36rem);
  z-index: 1;

  &:before {
    font-size: 4rem !important;
    color: black;
}
}
.grow-profit-slick .slick-prev:before, .grow-profit-slick .slick-next:before {
    font-size: 4rem !important; 
}
}
`

export const GrowProfitViewMore=styled(ViewMoreBtn)`
// margin-top: 10px;
margin-left: 2.4rem;
`
export const GrowProfitViewMoreBlack=styled(ViewMoreBtn)`
// margin-top: 10px;
background: transparent;
border:1pt solid white;
font-size:14px;
color: white;
cursor:pointer;

&:hover{
  background: red;
  color :white;
}
`
export const GrowProfitPriceText=styled(SubHeading)`
margin-top: 2px;
font-size:1.5rem;
color:white;
`
export const GrowProfitHeading = styled(PrimaryHeading)`
color: #242424;
opacity: 0.8;
font-size:3rem;
text-transform: capitalize;
`
export const GrowProfitSubHeading = styled(SubHeading)`
color: #333333;
opacity: 0.8;
font-size:2rem;
`
export const GrowProfitImgContainer = styled.div`
background-image:linear-gradient(to right, rgba(10, 71, 46, 0.88), rgba(10, 71, 46, 0.88)), url(${GrowProfitBack}) ;
  background-repeat: no-repeat;
  height:100%;
  background-size: cover;
// margin-top: 3rem;
position: relative;
`
export const GrowProfitImg = styled.img`
width:100%;
height:80%;
`
export const GrowProfitSlickContainer = styled.div`

color:white ;
.text-container{
  margin-left: 2rem;
}

.heading{
  font-size:2.5rem;
  font-weight:500;
  padding-top:4rem;
}

p{
  font-size:1rem;
  line-height:30px
}


@media only screen and (max-width: 768px) {
 .text-container{
    margin-left: 0;
    padding:0 2rem;
  }
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
`