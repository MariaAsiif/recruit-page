
import cartwhite from "../../../assets/landingImages/whiteCart.svg";
import cartgreen from "../../../assets/landingImages/blackCart.svg";

import styled from "styled-components";
export const CustomCardContainer = styled.div`
  .customCard {
    border: none;
    background: transparent;
    box-shadow: 0px;
    border-radius: 10px !important;
    margin-left:10px;
    // width:50%;

    .shop_show{
      display:none;
    }

    .img_hover{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: contain;
    opacity: 0;
    transition: opacity .2s;
    }

    &:hover{
      
      .shop_show{
        display:block;
        transition: .5 ease;
        margin-top:10px;
      }

      .img_hover{
        opacity: 1;
      }

    }
    

    @media screen and (max-width: 600px) {
      height: 100%;
    }
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
   
    gap: 5px;
  }

  .customCard .customCard-body .content .title h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
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
    flex-direction:column;
    align-items: start;
    gap: 6px;
    margin-top:5px;
  }

  .customCard .customCard-body .content .rating .stars {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .customCard .customCard-body .content .rating img {
    height: 12px;
    width: 12.36px;
  }

  .customCard .customCard-body .content .rating .review {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 11px;
    color: lightgray;
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