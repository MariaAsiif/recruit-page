import styled from "styled-components";

export const MedicineContainerMain = styled.div`
  margin-top: 9rem;
`;
export const MedicineImgContainer = styled.div`
  position: relative;
  text-align: center;
  margin-right:10px;
  margin-left:10px;
  margin-top: 1.7rem;
  text-align: -moz-center;
  text-align: -webkit-center;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4%;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
    border-radius: 1rem;
    width: 93%;

    @media screen and (max-width : 1024px) {
      left: 6%;
      width: 89%;
    }
    @media screen and (max-width : 768px) {
      left: 16%;
      width: 69%;
    }
    @media screen and (max-width : 425px) {
      left: 19%;
      width: 63%;
    }
    @media screen and (max-width : 375px) {
      left: 13%;
      width: 74%;
    }
    @media screen and (max-width : 320px) {
      left: 8%;
      width: 86%;
    }
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0 2rem;
  }
  &:hover,&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`;

export const MedicineSlickContainer = styled.div`
h1{
   font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 7.2rem; 
  text-transform: uppercase;
  text-align:center; 
  color: #535353;
margin-bottom:40px;
   
}
  .medicine-text{
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 1.6rem;
letter-spacing: 0em;
  }
  .text-red{
    color: #E84025;
opacity: 0.8;
  }
  
  `
export const MedicineImg = styled.img`
width: 100%;

`;
