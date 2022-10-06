import styled from "styled-components";

export const StatisticsMainContainer = styled.div`
  margin-top: 5.6rem;
  .source-world{
    font-size: 1.2rem;
    font-weight: normal;
    color: #858484;
    margin-top: 2rem;
  }
  h1 {
      font-weight: 500;
      font-size: 4.8rem;
      line-height: 7.2rem;
      color: #242424;
    }
  .card-container {
    position: relative;
    height: 17rem;

    

    h3 {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 4.8rem;
      letter-spacing: 0em;
      color: #242424;
    }
    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
      letter-spacing: 0em;
      color: #858484;
    }
    .mini {
      font-family: Poppins;
      font-size: 1.4re;
      font-style: normal;
      font-weight: 400;
      line-height: 2.1rem;
      letter-spacing: 0em;
      color: #333333;

      vertical-align: initial;
    }
    .icon {
      vertical-align: top;
    }
  }
`;
export const StatisticsTextContainer = styled.div`
  margin-top: 4rem;
  padding-left: 2rem;
`;

export const StatisticsImg = styled.img`
  height: 4rem;
`;
export const StatisticsImgContainer = styled.div`
  padding: 0 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
