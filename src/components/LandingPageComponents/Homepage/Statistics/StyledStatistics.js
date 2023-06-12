import styled from "styled-components";

export const StatisticsMainContainer = styled.div`

  text-align:center;
  h1 {
      font-weight: 500;
      font-size: 3rem;
       color: #242424;
       text-align:center;
    }
  .card-container {
    position: relative;
    height: 17rem;

    

    h3 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 4.8rem;
      letter-spacing: 0em;
      color: #242424;
    }
    p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
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
  display:flex;
  justify-content:center;
  flex-direction:column;
  padding-top:30px;
  align-items:center;
`;

export const StatisticsImg = styled.img`
  height: 3rem;
`;
export const StatisticsImgContainer = styled.div`
  padding: 0 2rem;
  position: absolute;
  right:30%;
  top: 1rem;
`;
