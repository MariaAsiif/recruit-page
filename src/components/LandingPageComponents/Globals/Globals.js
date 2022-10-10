import styled from "styled-components";
import cartgreen from "../../../assets/landingImages/blackCart.svg";
import cartwhite from "../../../assets/landingImages/whiteCart.svg";

export const PrimaryHeading = styled.h2`
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 7.2rem;
  letter-spacing: 0em;
  text-transform: uppercase;
  margin: 0;
  color: #242424;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
    font-style: normal;
    line-height: 4.2rem;
  }
`;
export const SubHeading = styled.h2`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.8rem;
  letter-spacing: 0em;
`;
export const SubHeadingSecondary = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.6rem;
  letter-spacing: 0em;
`;
export const TertiaryHeading = styled.h3`
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0em;
  color: #828282;
  margin: 0;
`;
export const TertiaryHeadSecondary = styled.h3`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0em;
  color: #828282;
  opacity: 0.8;
  margin: 0;
`;
export const TertiaryHeadingMedium = styled.h3`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: 0em;
  margin: 0;
`;
export const TertiaryHeadingSmall = styled.h3`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0em;
  color: #828282;
  margin: 0;
`;

export const ViewMoreBtn = styled.button`
  font-style: normal;
  border: 1px solid #242424;
  border-radius: 7rem;
  color: #242424;
  font-size: 16px;
  padding:0.7rem 2.5rem;
  background: transparent;
  font-weight: 500;
  letter-spacing: 0em;
  text-transform: capitalize;
  background: white;
  cursor: pointer;
  &:hover {
    background-color: #e84025;
    border: 1px solid #e84025;
    color: white;
  }
`;
export const ShopBtnTransparent = styled.button`
  font-style: normal;
  border: 1px solid #ffffff;
  border-radius: 7rem;
  padding:0.8rem 2rem;
  color: #ffffff;
  margin-top:1rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0em;
  background: transparent;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: #e84025;
    border: 1px solid #e84025;
    color: white;
  }
`;
export const PlayBtnContainer = styled.div`
  .btn {
    border: none;
    border-radius: 50%;
    background-color: white;
    padding: 0.4rem;
  }
`;
export const PlayBtnImg = styled.img`
  padding: 1.2rem;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ShopNowBtn = styled.button`
  padding: 0.9rem 2rem;
  border: 2px solid white;
  color: white;
  border-radius: 2rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #e84025;
    border: 2px solid #e84025;
    color: white;
  }
`;
export const AddToCartBtn = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid white;
  color: white;
  border-radius: 2rem;
  background: transparent;
  font-size: .8rem;
  cursor: pointer;
  &:hover {
    background-color: red !important;
    border: 2px solid #e84025;
    color: white;
  }
`;
export const PriceBtn = styled.button`
  padding: 0.8rem 4rem;
  border: 1px solid white;
  color: black;
  border-radius: 2rem;
  background: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CustomCardContainer = styled.div`
  .customCard {
    border: 2px solid #dddddd !important;
    background: #ffffff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 6%);
    border-radius: 10px !important;
    width: 94%;
  }

  .customCard .customCard-body {
    padding: 0;
  }

  .customCard .customCard-body .image-section {
    height: 253px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .customCard .customCard-body .image-section .main-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .customCard .customCard-body .content {
    // height: 169px;
    width: 100%;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .customCard .customCard-body .content .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  .customCard .customCard-body .content .title h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #242424;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .customCard .customCard-body .content .title span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #242424;
  }

  .customCard .customCard-body .content .rating {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .customCard .customCard-body .content .rating .stars {
    display: flex;
    align-items: center;
    gap: 1px;
  }

  .customCard .customCard-body .content .rating img {
    height: 9.89px;
    width: 10.36px;
  }

  .customCard .customCard-body .content .rating .review {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 9.46154px;
    line-height: 11px;
    color: #6c6c6c;
  }

  .customCard .customCard-body .content .add-to-cart {
    height: 45px;
    width:50%;
    border-radius: 10px;
    padding: 24px, 42px, 24px, 42px;
    color:white;
    background: #e84025;
    box-sizing: border-box;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    

    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .customCard .customCard-body .content .add-to-cart:hover {
    background: green;
    color: white;
  }


  .customCard .customCard-body .content .add-to-cart:hover > .cart {
    background-image: url(${cartwhite});
  }

  .customCard .customCard-body .content .add-to-cart .cart {
    // height: 15.07px;
    // width: 14.71px;
    // background-image: url(${cartgreen});
  }
`;
export const AddCardContainer = styled.div`
position: relative;
z-index: 0;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3%;
    right: 0;
    width: 94%;
    border-radius:10px;
    opacity: 0;
z-index: 999;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    position: absolute;
    top: 50%;
    z-index:9999;
    left: 50%;
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
    padding: 0 13px;
   
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





  .inner-card {
    height: 251px;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  

 



  .addCard {
    /* margin-right:3rem ; */
    width: 94%;
    border-radius: 6px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

    
  .addCard .image-section {
    height: 211px;
    width: 100%;
    position: relative;
    border-radius: 6px 6px 0 0;
  }

  .addCard .image-section .tag {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px 0px 0px 0px;
    height: 36px;
    width: 38px;
    background: #ff3f3f;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }

  .addCard .image-section img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }

  .addCard .advertise {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    height: 40px;
    background: green;
    color:white;
    border-radius: 0px 0px 6px 6px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

  }

  .addCard .advertise span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    /* or 97% */
    color:white;

  }
  .addCard .advertise img {
    height: 17px;
    width: 23px;
  }
`;
