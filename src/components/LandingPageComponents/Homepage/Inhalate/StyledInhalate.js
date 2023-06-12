import styled from "styled-components";
import { ViewMoreBtn } from "../../Globals/Globals";
import { HeroButton } from "../../Homepage/Header/StyledHeader";

export const InhalateMainContainer = styled.div`
.inhalate-slick{
  .slick-list {
  margin: 0 10px;
  
}
}
  margin-top: 2rem;
  font-style: normal;
  text-align: center;

  h3 {
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 7.2rem;
    letter-spacing: 0em;
    color: #242424;
    text-transform: uppercase;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.7rem;
    letter-spacing: 0em;
    color: #828282;
  }
`;
export const InhalateTextContainer = styled.div`
   padding: 0px 15px 50px 15px;
  @media screen and (max-width:480px) {
  // padding: 3rem 0rem;
    
  }
`;
export const InhalatedImgContainer = styled.div`
  padding: 0 1rem;
  position: relative;
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2%;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
    width:95%;
    height:100%;
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: white;
    padding: 4rem 2rem;

      img {
        width: 10%;
        height: 10%;
        transition: all 0.6s;
        &:hover{
          transform: scale(1.1);
        }
      }

      h3 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 3.4rem;
        line-height: 7.1rem;
        color: white;
      @media screen and (max-width:480px) {
        line-height: 3.6rem;
        font-size: 2.5rem;

      }
      }
      h2 {
        font-weight: bold;
        font-size: 3rem;
        line-height: 6rem;
        @media screen and (max-width:480px) {
        line-height: 3.6rem;
        font-size: 2.5rem;

      }
      }
      p {
        font-weight: normal;
        font-size: 1rem;
        line-height:2.2rem;
        color: white;
        padding: 0 2rem;
      }

      @media screen and (max-width : 1000px){
        
      img {
        width: 6%;
        height: 6%;
      }

      h3 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        line-height: 51px;
        color: white;
      }
      p {
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        color: white;
        padding: 0 1rem;
      }
      h2 {
        font-weight: bold;
        font-size: 26px;
        line-height: 50px;
      }
      }
      @media screen and (max-width : 480px){
        
        
  
        h3 {
          text-transform: uppercase;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 3.6rem;
          color: white;
        }
        p {
          font-weight: normal;
          font-size: 1.2ren;
          line-height: 1.7ren;
          color: white;
          padding: 0 1rem;
        }
        h2 {
          font-weight: bold;
          font-size: 2.6rem;
          line-height: 3.6rem;
        }
        }
    }
  }
  &:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`;

export const InhalteImg = styled.img`
  height: 505px;
  width:100%;
`;
export const InhalateContainer = styled.div`
  .inhalate-slick {
    margin-top: 7rem;
  }
`;
export const InhalateButtonContainer = styled.div`
  margin-top: 4.8rem;
`;

export const InhalateButton = styled(HeroButton)`
  margin-top: 4rem;
  padding: 0.5rem 2rem;
  border: 1px solid black;
  color: black;
  @media screen and (max-width:480px){
    margin-top: 1rem;
  }
`;

export const QuickShopBtn=styled(ViewMoreBtn)`
background-color: transparent;
border: 1px solid #FFFFFF;
color:#FFFFFF;
&:hover{
  background-color: #E84025 !important;
border: 1px solid #E84025;
}
`