import styled from "styled-components";
import cartBlack from "../../../assets/landingImages/blackCart.svg";
import cartwhite from "../../../assets/landingImages/whiteCart.svg";

export const ProductModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;

  .productDetail {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-title {
        h1 {
          color: #242424;
          font-weight: 500;
          font-size: 32px;
          line-height: 34px;
        }

        &-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          &-stars {
            display: flex;
            align-items: center;
            gap: 1px;
            img {
              height: 9.89px;
              width: 10.36px;
            }
          }
          &-review {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 9.46154px;
            line-height: 11px;
            color: #6c6c6c;
          }
        }
      }
      &-subtitle {
        h1 {
          color: #242424;
          font-weight: 500;
          font-size: 32px;
          line-height: 34px;
        }
      }
      &-description {
        min-height: 150px;
        p {
          color: #6c6c6c;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }
      &-buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        &-addtocart {
          height: 45px;
          width: 202px;
          border-radius: 6px;
          padding: 24px, 42px, 24px, 42px;
          background: #ffffff;
          border: 1px solid #1f7545;
          box-sizing: border-box;

          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 10px;
          color: black;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          :hover {
            background: #1f7545;
            border: 1px solid #1f7545;
            color: white;

            .cartIcon {
              background-image: url(${cartwhite});
            }
          }
          .cartIcon {
            background-image: url(${cartBlack});
            height: 15.07px;
            width: 14.71px;
          }
        }
        &-checkout {
          height: 45px;
          width: 202px;
          border-radius: 6px;
          padding: 24px, 42px, 24px, 42px;
          background: #ffffff;
          border: 1px solid #e84025;
          box-sizing: border-box;

          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 10px;
          color: black;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          :hover {
            background: #e84025;
            border: 1px solid #e84025;
            color: white;

            .cartIcon {
              background-image: url(${cartwhite});
            }
          }
          .cartIcon {
            background-image: url(${cartBlack});
            height: 15.07px;
            width: 14.71px;
          }
        }
      }
    }

    &-image {
      border: 1px solid gray;
      padding: 20px;
      border-radius: 5px;
      img {
        /* width: 405px; */
        height: 351px;
      }
    }
  }
`;
