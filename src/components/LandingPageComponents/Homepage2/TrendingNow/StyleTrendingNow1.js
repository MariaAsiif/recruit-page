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
