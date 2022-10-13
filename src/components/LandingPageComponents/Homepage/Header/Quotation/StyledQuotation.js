import styled from "styled-components";

export const QuotatinMainContainer = styled.div`
  width: 30rem;
  background-color: white;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  .inner-div {
    width: 20rem;
    width: 100%;

    p {
      font-size: 14px;
    }
  }
  p {
    margin-top: 1rem;
    padding: 15px;
    margin: 5px 0 2px 0;
    border: none;
    /* background: #f1f1f1; */
    resize: none;
    min-height: 120px;
  }
  .cancel-btn {
    background-color: orangered;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    text-align: center;
    margin-left: auto;
    cursor: pointer;
  }
  h3 {
    padding: 1.5rem 0;
    color: white;
  }
`;
export const QuotationContainer = styled.div`
  .quote-open {
    position: absolute;
    right: 1.6rem;
    bottom: 1.4rem;
    transition: all 0.2s linear;
    transform-origin: bottom;
    transform: scaleY(1);
    opacity: 1;
  }
  .quote-close {
    position: absolute;

    right: 1.6rem;
    bottom: 1.4rem;
    transform: scaleY(0);
    opacity: 0;
  }
`;
