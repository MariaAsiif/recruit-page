import styled from "styled-components";


export const AgenciesFaqMain = styled.div`
margin-top: 9rem;
.faq-head{
font-size: 3.6rem;
font-style: normal;
font-weight: 500;
line-height: 5.4rem;
letter-spacing: 0em;
text-align: center;
color: #333333;
}
`
export const AgenciesFaqContainer = styled.div`
  .accordion-button {
    background: white;
    border: none;
    outline: none;
    box-shadow: none;
  }
.accordion-header{
    padding: 1rem;
}
  .accordion-item {
    background: #ffffff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    border: none;
    margin-top: 1rem;
  }

  .accordion-button::after {
    display: none;
  }

  .faq-header {
    display: flex;
    align-items: center;


    img{
        width: 25px;
    }

    p {
      margin-left: 1rem;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #363636;
      margin-bottom: 0;
    }
  }


  .accordion-body{
    font-weight: normal;
font-size: 17px;
line-height: 24px;
color: #54595F;
padding: 0 2rem;
  }
  .agencies-fag-button {
    background: none;
    border: none;
  }
`;
