import styled from "styled-components";
import { PrimaryHeading, ViewMoreBtn } from "../../Globals/Globals";


export const EVendorCardMain = styled.div`
    margin-right: 1.5rem;
    .card{
      border-radius: 1rem !important;

    }
    .EVendorCard-main{
      height: 300px ;
      width: 100% ;
      position: relative;
      padding: 59px 67px;
  }

`

export const EVendorMain = styled.div`

margin-top: 9rem;
text-align: center;
.VendorCard-main{
  margin-right:2rem;
  height:30rem !important ;
  width : 100%;
}
.evendor-2{
    margin-top: 6.7rem;
}
.slick-container{
    margin-top: 6.5rem;
}
p{
font-size: 1.8rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
}

`
export const EVendorImgContainer = styled.div`
  
  width: 100% ;
  height: 100% ;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
    border-radius: 1rem;


  }
  .EVendorImg-inner-overlay {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  &:hover,&:hover .EVendorImg-inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`
export const EVendorImg = styled.img`
width: 100%;
height: 100%;


`
export const EVendorMiniImg = styled.img`
margin-top:1.3rem ;
width : 
2.3rem;
height : 
2.7rem;
`
export const MiniPharmImg = styled.img`
height: 1.8rem;
width: auto;
position:absolute ;
top : 1rem;
left: 1rem ;
`
export const EVendorViewMoreBtn = styled(ViewMoreBtn)`
margin-top:1rem
`
export const EvendorHeading=styled(PrimaryHeading)`
text-transform: capitalize;
font-size:45px;

@media screen and (max-width:600px) {
  font-size:19px !important;
}
@media screen and (max-width:992px) {
  font-size:2rem;
}
`