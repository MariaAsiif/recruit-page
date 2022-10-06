import styled from "styled-components";
import { AddToCartBtn } from "../../Globals/Globals";

export const DiagnoseMainContainer = styled.div`
margin-top: 9rem;
.diagnose-slick{
  .slick-slide {
  padding-right: 0 10px;
}
}

text-align: center;
h3{
font-size: 4.8rem;
font-style: normal;
font-weight: 500;
line-height: 7.2rem;
letter-spacing: 0em;
opacity: 0.8;
}
p{
font-size: 1.8rem;
font-style: normal;
font-weight: 500;
line-height: 2.7rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
}


`
export const DiagnoseImgContainer = styled.div`
position: relative;
margin-right: 2rem;
.overlay {
    position: absolute;
    top: 0;
    bottom: 2.8rem;
    left: 0;
    width: 97%;
    height: 100%;
    right: 2rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.6);
  }
.inner-overlay{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  h3{
font-size: 2.8rem;
font-style: normal;
font-weight: 500;
line-height: 4.2rem;
letter-spacing: 0em;
color: #FFFFFF;

}
p{
font-size: 1.8rem;
color: rgba(255, 255, 255, 0.8);
font-style: normal;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;
color: rgba(255, 255, 255, 0.8);
padding:0 3rem;
}
  }
   &:hover,  &:hover .inner-overlay ,&:hover .overlay{
     opacity: 1;   
    }
`
export const DiagnoseAppointmentBtn = styled(AddToCartBtn)`
margin-top: 3rem;
font-size: 1.6rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0.03em;
color: #242424;
border: 2px solid black;
`
export const DiagnoseImg = styled.img`
padding-right:2rem;
height: 
51rem;

`
export const StyledSlickContainer = styled.div`
margin-top: 5.6rem;
@media screen and (min-width:1024px) {
  .responsive-slick .slick-next {
      right: 21px !important;
      z-index: 1;
  }
  .responsive-slick .slick-prev {
      left: -27px !important;
      z-index: 1;
  }
}
 
h4{
font-size: 2.8rem;
font-style: normal;
font-weight: 500;
line-height: 4.2rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
margin-top: 6rem;
}
p{
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;

}

`