import styled from "styled-components";

export const NewsContainer = styled.div`
margin:30px 0px;
background-color: hsla(0deg,0%,var(--bg-light),var(--bg-alpha));
border:1pt solid;
border-color: #eee;
height:100%;

@media (max-width: 912px) {
    margin:30px 0px;
}




.card_wrapper{
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width:100%;

    .news_image{
        width:125px;
        object-fit:cover;
    }


    .card_container{
        display:flex;
        @media (max-width: 600px) {
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;

            img{
                width:250px;
                margin-left:10px;
            }
          }
    }

    .card_item{
        display:flex;
    
    a{
        background-color: transparent;
        border: 0;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 0;
        text-align: inherit;
        text-decoration: none !important;
    
        img{
            height:120px;
        }
    }
    }
    
    .content_info{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left:20px;
        height:100%;
    }
    

    .news_info{
        font-size:25px;
        color:black;
        font-weight:500;
    }

    .data_text{
        font-size:16px;
        color:black;
        font-weight:500;
    }
    .date{
        font-size:14px;
        font-weight:500;

    }




    

    
}
`


export const Pagination = styled.div`

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


`

