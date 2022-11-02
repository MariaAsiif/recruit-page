import cartgreen from "../../../assets/landingImages/blackCart.svg";
import cartwhite from "../../../assets/landingImages/whiteCart.svg";
import styled from "styled-components";


export const StyleTrending = styled.div`

.top-categories{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 26px;
    margin-bottom: 15px;
    /* border-bottom: 1px solid #DADADA; */
}

.top-categories h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #414141;
}

.top-categories .slick-btns{
display: flex;
align-items: center;
gap:15.23px
}

.top-categories .slick-btns .next-btn,
.top-categories .slick-btns .prev-btn{
    height: 33px;
    width: 33px;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: fit-content;
        height: auto;
    }
} 



  padding-top: 4rem;
  /* padding-bottom: 10.2rem; */
  .trendingNow-slick {
    .slick-next {
      right: 2.5%;
    }

    .slick-prev {
      left: 1%;
    }

    .d-inline-block {
      text-align: -webkit-center;
    }
  }

  .main-section {
    display: flex;
    height: 6.9rem;
    border-bottom: 0.1rem solid #dadada;
    justify-content: space-between;
  }
  .icons {
    display: felx;
    cursor: pointer;
    margin-top: 1rem;
  }
  .icon-images {
    height: 4rem;
    width: 4rem;
  }

  .tranding-heading {
    h1 {
      font-weight: 500;
      font-size: 22px;
      margin-left:20px;
      color: #242424;

      @media screen and (max-width: 480px) {
      margin-top: 0;
      font-size: 2.6rem;
      line-height: 3.4rem;
    }
    }

    p{
        padding-left: 20px;
        font-size: 14px;
        margin-left:20px;
        color: black;
        margin: 0;
    }
    /* border-bottom: 1px solid #DADADA; */
 
  }

  .outside-card-text {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.7rem;
    /* background-color: red; */
  }
  .card {
    /* width: auto !important; */
    /* margin-right:3rem; */
    text-align: -webkit-center;
    @media screen and (max-width: 480px) {
      width: 67% !important;
    }
    background: #ffffff;
    border: 2px solid #e2e2e2;
    border-radius: 0.3rem;
    @media screen and (max-width: 480px) {
      text-align: center;
      width: 95%;
    }
  }

  .slick-track {
    padding: 15px 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 3.6rem;
    color: #242424;
  }
  h4 {
    color: #242424;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    padding: 0 2rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #828282;
    margin-top: 0.3rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
  }
  h5 {
    font-size: 1.2rem;
    line-height: 2.7rem;
  }
`;
export const TrendingNowSlick = styled.div`
  margin-top: 4rem;
`;

export const CustomCardContainer = styled.div`
  .customCard {
    border: none;
    background: transparent;
    box-shadow: 0px;
    border-radius: 10px !important;
    margin-left:10px;
    
    .shop_show{
      display:none;
    }

    &:hover{
      
      .shop_show{
        display:block;
        transition: .5 ease;
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