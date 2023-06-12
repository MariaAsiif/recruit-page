import styled from "styled-components";

export const ViewTodayStyle = styled.div`
  .everythingviewproduct {
    background: #ffffff;
    border: 1px solid #e2e2e2;
  }

  .main-heading {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #242424;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid #dadada;
    @media screen and (max-width: 480px) {
      font-size: 2.6rem;
      line-height: 3.4rem;
    }
  }

  .viewToday-slick .slick-prev {
    left: 1%;
  }

  .viewToday-slick .slick-next {
    right: 2.5%;

    @media screen and (max-width:600px) {
      right: 9% !important;
  }

  @media screen and (min-width:768px) and (max-width:992px) {
    right: 5% !important;
}
  }



  .viewToday-slick .slick-prev:before {
    content: "" !important;
    background-image: url(/static/media/left-slider-arrow.a0ebde13.svg) !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 2rem;
    position: absolute;
    left: 0;
    top: bottom;
    bottom: -26%;
  }

  .right-block {
    margin-top: 2.5rem;
    margin-right: 1rem;
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
  }
  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #828282;
    margin-top: 0.3rem;
    margin-bottom: 2rem;
  }
`;
export const ViewTodaySlick = styled.div`
  margin-top: 4rem;
`;
