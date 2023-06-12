import styled from "styled-components";
import LocaterHeader from "../../../../assets/landingImages/LocaterHeader.svg";

export const StyleHeader = styled.div`
  .locator-pagination {
    display: flex;
    align-content: center;
    gap: 30px;
    list-style: none;
    font-size: 16px;
    justify-content: center;

    .previous a {
      color: red;
      text-decoration: none;
    }
    .next a {
      color: red;
      text-decoration: none;
    }
    .selected a {
      color: red;
      text-decoration: none;
    }
  }

  .loacateUsCard-container {
    margin-top: 50px !important;
  }
  .header {
    background-image: url(${LocaterHeader});
    /* background-color: #cccccc; */
    background-repeat: no-repeat;
    /* height: 38.5rem; */
    background-size: cover;
    color: #ffffff;
  }
  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 3.5rem;
    text-align: center;
    padding-top: 8.7rem;
    @media (max-width: 425px) {
      font-size: 3rem;
    }
  }
  h2 {
    padding-top: 3.4rem;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 2.4rem;
    text-align: center;
    @media (max-width: 425px) {
      font-size: 2rem;
      padding-top: 2.4rem;
    }
  }
  h6 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 89.5%;
    color: #242424;
  
  }
  .cards {
    background: #ffffff;
    box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    margin-bottom: 1.5rem;
    height: 500px;
    @media (max-width: 991px) {
      margin-bottom: 1.5rem;
    }
    @media (max-width: 575px) {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
    @media (max-width: 325px) {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
  }
  .select-option {
    padding-top: 4.7rem;
    padding-bottom: 8.7rem;
  }
  .btn {
    width: 100%;
    transform: translateY(8px);
    height: 5rem;
    background: #e84025;
    border: 0.1rem solid #e84025;
    box-sizing: border-box;
    border-radius: 0.5rem;
    display: block;
    /* padding-top:7.1rem ; */
    font-size: 1.6rem;
    text-align: center;
  }
  .search-img {
    height: 2.2rem;
    width: 2.2rem;
  }
  .locator-person-image-container {
    width: 100%;
    height: 300px;
  }
  .img-section {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    background: #e3e3e3;
    border-radius: 1rem 1rem 0px 0px;
  }
  .icon {
    height: 1.6rem;
    width: 1.6rem;
  }
  .country-name-text{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100px;
    display: inline-block;
    white-space: nowrap;
  }
  .icon-text {
    margin-left: 1rem;
    margin-right: 1rem;

  }
  .locator-card-bt {
    width: 100%;
    height: 4.5rem;
    border: 1.2px solid #333333;
    box-sizing: border-box;
    border-radius: 0.7rem;
    background-color: red;
    color:white;
    font-size: 1.6rem;
   &:hover{
    background-color:green
   }
  }
  .card-data {
    padding: 1.5rem 1.5rem;

    h6 {
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .para {
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #828282;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text1 {
    font-size: 1.3rem;
    line-height: 89.5%;
    color: #828282;
    padding-bottom: 1.8rem;
  }
  .label-locator {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 89.5%;
  }
`;
