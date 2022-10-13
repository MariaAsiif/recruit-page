import styled from "styled-components";

export const StyleDesignServices=styled.div`
margin-top: 17rem;
.bgcolor{
background-color: #FCFBFB;
}
.main-heading{
    /* padding-top: 7.4rem; */
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5.4rem; 
    text-align: center;
    margin-bottom: 6rem;
}
.cards{
    /* height: 41rem; */
    /* width:36rem; */
    background: #FFFFFF;
    box-shadow: 0px 0px 1.4rem rgba(0, 0, 0, 0.1);
    border-radius: .9rem;
    padding: 2.8rem 2.8rem ;
    margin-bottom: 3rem;

    @media (max-width: 768px){
           /* max-width: 80%; */
           margin: 0 auto;
           margin-bottom: 2rem;
    }
    @media (max-width: 400px){
           /* max-width: 100%; */
           margin: 0 auto;
           margin-bottom: 2rem;
    }
}
.heading-section{
    /* margin-top: 2.8rem; */
    //margin-left: 2.8rem;
}
.img-icon{
    width: 4rem;
    height: 3.3rem;
}
.branding-heading{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 79%;
    padding-top:.8rem; 
    padding-left: 2.1rem; 
}
.paragraph{
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2.3re;
    opacity: 0.8;
    padding: 2rem 0;
    /* margin-top: 3.6rem; */
    /* margin-right: 2rem; */
    /* margin-bottom: 3.5rem; */
}
.main-options{
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* margin-bottom: 2rem ; */
   /* margin-right: 5.9rem; */
&-option{
    padding-bottom: 2rem;
}}
    

.tick{
    width:1.5rem;
    height:1.5rem;
}
.tick-option{
    padding-left: 1.4rem; 
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    opacity: .8;
}
.card-btn{
    /* margin-top: -5rem; */
    height: 3.1rem;
    width: 9.5rem;
    border: 0.1rem solid #242424;
    border-radius: 5rem;
    background-color: white;
    /* margin-bottom: 3.2rem; */
}
`