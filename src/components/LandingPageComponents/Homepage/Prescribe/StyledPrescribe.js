import styled from "styled-components";
import { ViewMoreBtn, ShopNowBtn, ShopBtnTransparent } from "../../Globals/Globals";

export const PrescribeMainContainer = styled.div`
  margin-top: 6rem;
  padding-left:20px;
  .card-overlay{
    padding-right: 2rem;

  }
`;

export const PrescribeImgContainer = styled.div`
  position: relative;
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 92.5%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    position: absolute;
    top: 50%;
    left: 47%;
    width: 100%;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
   
    h3 {
      font-weight: 600;
font-size: 24px;
line-height: 36px;
    }
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      line-height: 22px;
      font-weight: 200;

    }
  }
  &:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
  @media screen and (max-width:768px) {
     .overlay{
      left: 4%;
    width: 91%;
     }
    }
`;

export const PrescribeImg = styled.img`
  /* height: 35rem; */
  @media screen and (max-width:768px) {
    padding-left:2rem ;
    
  }
`;

export const ConsultDarkBtn = styled(ViewMoreBtn)`
  background: #242424;
  color: #ffffff;
  font-size:16px;
  
`;

export const ShopBtn = styled(ShopNowBtn)`
  margin: 2rem 0;
`;
export const PrescribeSlickMain = styled.div`
  .responsive-slick {
    .text-container {
      padding-left: 2rem;
      p {
        opacity: 0.8;
        color: #828282;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }

      .prescribe-btns {
        margin-top: 3.5rem;
        .prescribe-btn2 {
          margin-left: 1rem;
        }
        @media only screen and (max-width: 1200px) {
          .prescribe-btn2 {
            margin-top: 1rem;
            margin-left: 1rem;
          }
        }
      }
    }
    .slick-list {
      margin: 0 -10px;
    }
  }
`;

export const PrescribeBtn=styled(ShopBtnTransparent)`
margin-top: 2rem;
font-size:16px;
padding: 0.7rem 1.5rem;
`
