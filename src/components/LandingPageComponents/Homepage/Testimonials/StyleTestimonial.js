import styled from "styled-components";
import TestimonialBackground from '../../../../assets/landingImages/TestimonialBackground.png';

export const Testimonial = styled.div`
margin-top: 6rem;
.testimonial-slider{
    .slick-prev{
        left: -25px;
    } 
    .slick-next {
        right: 6px;
    }
}
.background{
    background-image: 
    url(${TestimonialBackground});
    width: 144rem;
    height: 72.9rem;
}
h1{
    text-align: center;
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 7.2rem;
}
.text-design{
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: center;
    color: #828282;
}
.main-image{
    height: 12.7rem;
    width: 12.7rem;
    margin-bottom: 2.1rem;
    margin-top: 5.8rem;
}
.Card{
    margin-right: 1rem;
    height: 60rem;    
    max-width: 45rem;
    @media screen and (min-width:320px) {
        
    }
}

.nameHeading{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #242424;
}
.profession{
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #828282;
}
.flag{
    width: 2.25rem; 
    height :1.4rem;
    margin-top: 1.85rem;
}
 .lead{
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #828282;
    margin:2rem 0;
    padding:0 3rem; 
   margin-top: 5px;

 }   
 .btn-read{
    font-weight: normal;
    font-size: 1.6rem;
   line-height: 2.4rem;
   color: #E84025;
 }
`
export const RecordingContainer=styled.div`
padding:2rem ;
`