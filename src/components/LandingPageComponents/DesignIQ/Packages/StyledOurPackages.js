import styled from "styled-components";
export const PackagesCardMain = styled.div`
@media screen and (max-width:525px) {
    .packages-slick{
        max-width: 37rem;
        margin: 0 auto;
    }
    .hnIGG{
        margin-left: 0;
    }
}
margin-top: 4.1rem;
.main-heading{
font-size: 3.6rem;
font-style: normal;
font-weight: 500;
line-height: 5.4rem;
letter-spacing: 0em;
color:#333333;
text-align: center;

}
`
export const PackageCardMain = styled.div`
margin-top: 6rem;
margin-bottom: 2.4rem;

box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
font-style: normal;
margin-left: 10px;
.include{ 
margin-top: 1rem;
font-size: 1.8rem;
font-weight: 500;
line-height: 2.8rem;
letter-spacing: 0em;
color: #333333;
}

`
export const InnerCard = styled.div`
padding: 2.9rem 0 2.8rem 2.5rem;

`
export const PackageNameBox = styled.div`
min-height: 10.3rem;
background: #E84025;
border-radius: 6px 6px 0px 0px;
color: #FFFFFF;
padding: 2.9rem  2.4rem;
h3{
    
font-size: 2.5rem;
font-weight: 600;
line-height: 1.8rem;
letter-spacing: 0em;
}
p{
margin-top: 1.3rem;
font-size: 2.8rem;
font-weight: 600;
line-height: 2.4rem;
letter-spacing: 0em;
}
`
export const OfferImg = styled.img`
height: 2.3rem;
display: inline-block;
margin-top: 0.4rem;
`
export const PackOffer = styled.div`
display:flex;
p{
font-size: 1.5rem;
font-weight: 400;
line-height: 2.1;
letter-spacing: 0.005em;
margin-left: 1.2rem;
color: #182F43;
}
`
export const GetStartBtn = styled.div`
width: 
25rem;
height: 
4.1rem;
margin-top: 4.6rem;
padding: .7rem 2.4rem;
background: #E84025;
border-radius: 0.6rem;
font-size: 1.6rem;
font-weight: 300;
line-height: 2.6rem;
letter-spacing: 0em;
text-align: center ;
color: #FFFFFF;

`
