import styled from "styled-components";

export const TrendNowInner = styled.div`
  margin-top: 2.9rem;
`;

export const StyleTrending = styled.div`
  /* padding-bottom: 10.2rem; */
  .trendingNow-slick {
    margin-top: 3.3rem !important;
    .slick-next {
      right: 9px !important;
    }
    .slick-prev {
      left: -23px !important;

      @media screen and (max-width: 768px) {
        left: -16px !important;
      }
      @media screen and (max-width: 480px) {
        left: -4px !important;
      }
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

  .main-heading {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5rem;
    color: #242424;
    margin-top: 1rem;
    border-bottom: "1px solid #DADADA";
    padding-top: "1rem";
    @media screen and (max-width: 480px) {
      margin-top: 0;
      font-size: 2.6rem;
      line-height: 3.4rem;
    }
  }

  .outside-card-text {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.7rem;
    /* background-color: red; */
  }
  .d-inline-block {
    text-align: -webkit-center;
  }
  .card {
    width: auto !important;
    margin-right: 1rem;
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
