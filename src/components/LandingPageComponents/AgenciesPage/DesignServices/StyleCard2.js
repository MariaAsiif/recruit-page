import styled from "styled-components";

const StyleCard2=styled.div`
h1{
    font-size: 4rem;
}
.rows{
    margin-top: 13rem;
}
.icon-img{
    width:4rem;
    height: 3.2rem;
}
.cards{
    border: .1rem solid #DADADA;
    box-sizing: border-box;
    border-radius: .9rem;
    padding: 4.1rem 3.1rem ;
    margin-bottom: 3rem;
    
    @media (max-width: 768px){
           /* max-width: 70%; */
           margin: 0 auto;
           margin-bottom: 2rem;
    }
    @media (max-width: 400px){
           /* max-width: 100%; */
           margin: 0 auto;
           margin-bottom: 2rem;
    }
}
h3{
    padding:1.7rem 0;
    font-weight: 500;
    font-size: 2rem;
    line-height: 79%;
}
p{
    font-size: 1.5rem;
    line-height: 2.4rem;
    opacity: .8;
    /* width: 34.9rem; */
    /* height: 8.7rem; */
}
`

export default StyleCard2;