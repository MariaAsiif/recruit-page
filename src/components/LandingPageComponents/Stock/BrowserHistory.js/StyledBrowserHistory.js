import styled from 'styled-components'
export const BrowserHistoryMain = styled.div`
margin-top: 4.8rem;

.viewToday-slick{  
  .slick-next{
    right: -6px !important;
    
    }
}
.viewToday-slick{  
    
    @media screen and (max-width:768px) {
        .slick-next{
    right: 4px !important;
    
   
}
.slick-prev{
        left: 2px !important;
}
    
        }
    }
.main-heading{
font-size: 3.6rem;
font-style: normal;
font-weight: 500;
line-height: 5.4rem;
letter-spacing: 0em;
color: #242424;
padding: 1rem 0;
border-bottom: 1px solid #DADADA ;
@media screen and (max-width:480px) {
    font-size: 2.6rem;
    line-height: 3.4rem;

}
}
`
export const BrowserHistoryImgContainer = styled.div`
min-height:15.5rem;
`
export const BrowserHistoryImg = styled.img`

width: 22rem;
margin-top:6.5rem ;
`
export const BroswerSlick = styled.div`
margin-top: 5.8rem;
`