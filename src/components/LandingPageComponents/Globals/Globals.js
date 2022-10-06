import styled from "styled-components";
import cartgreen from "../../../assets/landingImages/blackCart.svg";
import cartwhite from "../../../assets/landingImages/whiteCart.svg";

export const PrimaryHeading = styled.h2`
  font-size: 3.5rem;
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
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.7rem;
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
  height: 3rem;
  width: 10rem;
  border: 1px solid #242424;
  border-radius: 7rem;
  color: #242424;
  font-size: 20px;
  background: transparent;
  font-weight: 500;
  line-height: 2.4rem;
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
  height: 4.8rem;
  width: 15.4rem;
  border: 1px solid #ffffff;
  border-radius: 7rem;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
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
  padding: 0.8rem 2rem;
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
    // width: 272px;
    border-radius: 6px;
    padding: 24px, 42px, 24px, 42px;
    background: #ffffff;
    border: 1px solid black;
    box-sizing: border-box;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    /* or 75% */

    /* HEMP 05 */

    color: black;

    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .customCard .customCard-body .content .add-to-cart:hover {
    background: #e84025;
    border: 1px solid #e84025;
    color: white;
  }


  .customCard .customCard-body .content .add-to-cart:hover > .cart {
    background-image: url(${cartwhite});
  }

  .customCard .customCard-body .content .add-to-cart .cart {
    height: 15.07px;
    width: 14.71px;
    background-image: url(${cartgreen});
  }
`;
export const AddCardContainer = styled.div`
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
    background: #d1e682;
    border-radius: 0px 0px 6px 6px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    /* or 100% */

    color: #000000;
  }

  .addCard .advertise span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    /* or 97% */

    color: #000000;
  }
  .addCard .advertise img {
    height: 17px;
    width: 23px;
  }
`;
